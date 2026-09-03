/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,

    // Allow mobile/device access during development
    allowedDevOrigins: ["192.168.29.3"],

    // Static website export for InfinityFree
    output: "export",

    // Required for static hosting with next/image
    images: {
        unoptimized: true,
    },
};

export default nextConfig;