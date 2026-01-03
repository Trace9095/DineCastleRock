import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  async redirects() {
    return [
      // Fix broken internal links from guides
      {
        source: '/listing/great-divide',
        destination: '/listing/great-divide-brewery-roadhouse',
        permanent: true,
      },
      {
        source: '/listing/provision',
        destination: '/listing/provision-castle-rock',
        permanent: true,
      },
    ]
  },
};

export default nextConfig;
