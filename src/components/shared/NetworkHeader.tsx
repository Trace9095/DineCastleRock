import Link from "next/link"
import { Search, MapPin, Menu } from "lucide-react"
import { Button } from "@/components/ui/button"
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet"

export function NetworkHeader() {
  return (
    <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-md supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between px-4 sm:px-8 max-w-7xl mx-auto">
        {/* Mobile Menu */}
        <div className="flex items-center md:hidden">
          <Sheet>
            <SheetTrigger asChild>
              <Button variant="ghost" size="icon" className="-ml-2">
                <Menu className="h-5 w-5" />
                <span className="sr-only">Toggle menu</span>
              </Button>
            </SheetTrigger>
            <SheetContent side="left">
              <nav className="flex flex-col gap-4 mt-8">
                <Link href="https://visitcastlerock.co" className="text-lg font-medium text-muted-foreground">Visit</Link>
                <Link href="/" className="text-lg font-bold text-foreground">Dine Castle Rock</Link>
                <Link href="https://shopcastlerock.co" className="text-lg font-medium text-muted-foreground">Shop</Link>
              </nav>
            </SheetContent>
          </Sheet>
        </div>

        {/* Centered Network Navigation (Desktop) */}
        <nav className="hidden md:flex items-center gap-6 absolute left-1/2 -translate-x-1/2">
          <a
            href="https://visitcastlerock.co"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Visit
          </a>

          <Link href="/" className="flex items-center px-2">
            <span className="font-bold text-xl tracking-tight text-foreground">Dine Castle Rock</span>
          </Link>

          <a
            href="https://shopcastlerock.co"
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Shop
          </a>
        </nav>

        {/* Spacer for Flex Alignment on Desktop if needed, or just let Justify-Between handle the sides */}
        {/* We have: Left(MobileMenu), Center(Nav), Right(Actions). 
            On Desktop: Left is empty (hidden mobile menu), Center is absolute, Right is present.
            This works with the existing justify-between.
        */}

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
          <Button variant="ghost" size="icon" aria-label="Search" asChild>
            <Link href="/restaurants">
              <Search className="h-5 w-5" />
            </Link>
          </Button>
          <Button size="sm" className="hidden sm:inline-flex rounded-full" asChild>
            <Link href="/add-listing">
              Add Listing
            </Link>
          </Button>
        </div>
      </div>
    </header>
  )
}
