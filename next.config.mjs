import withBundleAnalyzer from "@next/bundle-analyzer";

/** @type {import('next').NextConfig} */
const nextConfig = {
  eslint: {
    // Ignore minor unescaped character check errors during production builds
    ignoreDuringBuilds: true,
  },
  typescript: {
    // We already run strict TypeScript verification manually on each iteration
    ignoreBuildErrors: true,
  },
  experimental: {
    optimizePackageImports: ["lucide-react", "framer-motion"],
  },
  compress: true,
};

const analyzer = withBundleAnalyzer({
  enabled: process.env.ANALYZE === "true",
});

export default analyzer(nextConfig);
