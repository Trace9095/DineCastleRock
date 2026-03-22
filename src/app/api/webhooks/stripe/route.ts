import { NextRequest, NextResponse } from "next/server";

export async function POST(req: NextRequest) {
  try {
    const body = await req.text();
    // Parse just enough to log the event type
    let eventType = "unknown";
    try {
      const parsed = JSON.parse(body);
      eventType = parsed?.type ?? "unknown";
    } catch {
      // ignore parse errors — we still return 200
    }
    console.log("Stripe webhook received:", eventType);
    // Handled event types (DB integration can be added later):
    // checkout.session.completed
    // customer.subscription.created
    // customer.subscription.updated
    // customer.subscription.deleted
    // invoice.paid
    // invoice.payment_failed
    return NextResponse.json({ received: true });
  } catch (err) {
    console.error("Stripe webhook error:", err);
    return NextResponse.json({ received: true });
  }
}
