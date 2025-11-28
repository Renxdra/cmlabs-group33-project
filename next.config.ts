import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // Explicitly set the root directory to avoid workspace detection issues
  turbopack: {
    root: "."
  }
};

export default nextConfig;