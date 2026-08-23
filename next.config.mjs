/** @type {import('next').NextConfig} */
const nextConfig = {
    reactCompiler: true,

    // Static website export for InfinityFree
    output: "export",

    // Required for static hosting with next/image
    images: {
        unoptimized: true,
    },
};

export default nextConfig;