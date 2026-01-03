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
                        <Link href="/" className="text-lg font-semibold text-foreground">Dine</Link>
                        <Link href="https://shopcastlerock.co" className="text-lg font-medium text-muted-foreground">Shop</Link>
                    </nav>
                </SheetContent>
            </Sheet>
        </div>

        {/* Network Tabs (Desktop) */}
        <nav className="hidden md:flex items-center gap-8">
          <a 
            href="https://visitcastlerock.co" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Visit
          </a>
          <Link 
            href="/" 
            className="text-sm font-semibold text-foreground border-b-2 border-primary pb-0.5"
          >
            Dine
          </Link>
          <a 
            href="https://shopcastlerock.co" 
            className="text-sm font-medium text-muted-foreground hover:text-foreground transition-colors"
          >
            Shop
          </a>
        </nav>

        {/* Brand Center (Mobile) / Left (Desktop - Optional variant)
            For this design, let's keep tabs on left/center and logo center? 
            Actually, let's put "Dine Castle Rock" logo on the specific site area or just use the active tab as the brand indicator? 
            Request said "Shared Network Header". 
            Let's add the Logo.
        */}
        <div className="absolute left-1/2 -translate-x-1/2 md:static md:translate-x-0 md:ml-auto md:mr-auto">
            <Link href="/" className="flex items-center gap-2">
                <span className="font-bold text-xl tracking-tight text-foreground">Dine Castle Rock</span>
            </Link>
        </div>

        {/* Right Actions */}
        <div className="flex items-center gap-2 md:gap-4">
             <Button variant="ghost" size="icon" aria-label="Search">
                <Search className="h-5 w-5" />
             </Button>
             <Button size="sm" className="hidden sm:inline-flex rounded-full">
                Add Listing
             </Button>
        </div>
      </div>
    </header>
  )
}
