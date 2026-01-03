# Dine Castle Rock

A premium local dining guide for Castle Rock, Colorado. This platform helps locals and visitors discover the best restaurants, cafes, bars, and food trucks in the area.

## Tech Stack

This project is built with a modern, high-performance stack:

- **Framework:** [Next.js 16](https://nextjs.org) (App Router)
- **Language:** [TypeScript](https://www.typescriptlang.org/)
- **Styling:** [Tailwind CSS v4](https://tailwindcss.com/)
- **Authentication:** [Clerk](https://clerk.com/)
- **UI Components:** [Radix UI](https://www.radix-ui.com/), [Lucide React](https://lucide.dev/)
- **Carousel:** [Embla Carousel](https://www.embla-carousel.com/)
- **Payments:** [Stripe](https://stripe.com/)

## Features

- **Comprehensive Directory:** Detailed listings for dining establishments.
- **Advanced Search & Filtering:** Find places by cuisine, atmosphere, and more.
- **Visual Guides:** Curated lists (e.g., "Best Date Night Spots").
- **Business tools:** Owners can claim listings and manage their presence.
- **Advertising:** Premium ad placements for local businesses.

## Getting Started

1. **Clone the repository:**

   ```bash
   git clone <repository-url>
   cd dinecastlerock
   ```

2. **Install dependencies:**

   ```bash
   npm install
   ```

3. **Set up environment variables:**

   Create a `.env.local` file in the root directory and add your keys (Clerk, Stripe, Database, etc.).

   ```bash
   cp .env.example .env.local
   ```

4. **Run the development server:**

   ```bash
   npm run dev
   ```

   Open [http://localhost:3000](http://localhost:3000) with your browser to see the result.

## Scripts

- `npm run dev` - Start development server
- `npm run build` - Build for production
- `npm run start` - Start production server
- `npm run lint` - Run ESLint

## License

All rights reserved.
