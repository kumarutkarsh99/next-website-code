  import type { NextConfig } from "next";

  const nextConfig: NextConfig = {
      basePath: "/a1-selector-next",
    assetPrefix: "/a1-selector-next",
    images: {
      remotePatterns: [
        {
          protocol: 'http',
          hostname: '72.61.229.100',
          port: '3001',
          pathname: '/uploads/**',
        },
      ],
    },
    /* config options here */
  };

  export default nextConfig;
