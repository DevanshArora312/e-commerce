/** @type {import('next').NextConfig} */
const nextConfig = {
    images: {
        remotePatterns: [
            {
                protocol: 'https',
                hostname: 'media.visio-net.com',
                port: '',
                // pathname: '/*/**',
            },
        ],
    },
};

export default nextConfig;
