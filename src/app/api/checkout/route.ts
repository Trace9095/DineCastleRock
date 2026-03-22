import { NextRequest, NextResponse } from "next/server";
import Stripe from "stripe";

function getStripe() {
  return new Stripe(process.env.STRIPE_SECRET_KEY!, {
    apiVersion: "2025-12-15.clover" as any,
  });
}

export async function POST(req: NextRequest) {
  try {
    const { tier, email, businessName } = await req.json();

    const prices: Record<string, { amount: number; name: string }> = {
      premium: { amount: 9900, name: "DineCastleRock Premium Listing — $99/mo" },
      sponsored: { amount: 19900, name: "DineCastleRock Sponsored Listing — $199/mo" },
    };

    const selected = prices[tier as string];
    if (!selected) {
      return NextResponse.json({ error: "Invalid tier" }, { status: 400 });
    }

    const stripe = getStripe();
    const session = await stripe.checkout.sessions.create({
      mode: "subscription",
      customer_email: email || undefined,
      metadata: { businessName: businessName || "", tier },
      line_items: [
        {
          price_data: {
            currency: "usd",
            product_data: { name: selected.name },
            unit_amount: selected.amount,
            recurring: { interval: "month" },
          },
          quantity: 1,
        },
      ],
      success_url: `${process.env.NEXT_PUBLIC_APP_URL || "https://dinecastlerock.co"}/advertise?success=true`,
      cancel_url: `${process.env.NEXT_PUBLIC_APP_URL || "https://dinecastlerock.co"}/advertise`,
    });

    return NextResponse.json({ url: session.url });
  } catch (err) {
    console.error("Stripe checkout error:", err);
    return NextResponse.json({ error: "Failed to create checkout session" }, { status: 500 });
  }
}
