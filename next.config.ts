import type { NextConfig } from "next";

const nextConfig: NextConfig = {
 images: {
    minimumCacheTTL: 2678400 * 12, 
    remotePatterns: [
      {
        protocol: 'https',
        hostname: 'khulnatutionservice.com',
        port: '',
        pathname: '/**',
      },
    ],
 
    
  }, 
};

export default nextConfig;
