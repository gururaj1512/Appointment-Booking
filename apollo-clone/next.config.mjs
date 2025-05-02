/** @type {import('next').NextConfig} */
const nextConfig = {
    reactStrictMode: true,
    images: {
        domains: ['placehold.co', 'localhost', 'www.apollo247.com'],
        dangerouslyAllowSVG: true,
        contentSecurityPolicy: "default-src 'self'; script-src 'none'; sandbox;",
    },
    env: {
        API_URL: process.env.API_URL || 'http://localhost:5000/api',
    },
};

export default nextConfig;