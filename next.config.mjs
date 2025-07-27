/** @type {import('next').NextConfig} */
const nextConfig = {
    output: "standalone",
    images: {
        dangerouslyAllowSVG: true
    },
    poweredByHeader: false,
};

export default nextConfig;
