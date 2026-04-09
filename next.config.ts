import type { NextConfig } from 'next';

const nextConfig: NextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'fakestoreapi.com',
            },
            {
                protocol: 'https',
                hostname: 'dummyimage.com',
            },
            {
                protocol: 'https',
                hostname: 'api.escuelajs.co',
            },
        ],
    },
};

export default nextConfig;
