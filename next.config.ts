import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  reactStrictMode: true,
  // This project has its own lockfile; pin the workspace root to avoid
  // Next.js picking up a parent-directory lockfile.
  turbopack: {
    root: __dirname,
  },
  images: {
    // Allows the placeholder avatar (SVG) to render via next/image.
    // Real raster photos (jpg/png) are optimized normally.
    dangerouslyAllowSVG: true,
    contentDispositionType: "attachment",
    contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
  },
};

export default nextConfig;
