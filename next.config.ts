import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  // @ts-ignore - allowedDevOrigins is required by the dev server for local network access
  allowedDevOrigins: ["192.168.18.13"],
};

export default nextConfig;
