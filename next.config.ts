import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  cacheComponents: true,
  partialPrefetching: true,
  // The project used to be called exoh-portfolio. Send the old addresses to the
  // canonical one so the site has a single public URL.
  async redirects() {
    return [
      {
        source: "/:path*",
        has: [{ type: "host", value: "exoh-portfolio.vercel.app" }],
        destination: "https://aboutexoh.vercel.app/:path*",
        permanent: true,
      },
      {
        source: "/:path*",
        has: [{ type: "host", value: "exoh-portfolio-exoh.vercel.app" }],
        destination: "https://aboutexoh.vercel.app/:path*",
        permanent: true,
      },
    ];
  },
  turbopack: {
    rules: {
      "*.css": {
        loaders: ["@tailwindcss/turbopack"],
        as: "*.css",
      },
    },
  },
};

export default nextConfig;
