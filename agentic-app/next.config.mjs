/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  experimental: {
    useWasmBinary: true
  },
  images: {
    unoptimized: true
  }
};

export default nextConfig;
