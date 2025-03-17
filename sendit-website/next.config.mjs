/** @type {import('next').NextConfig} */
const nextConfig = {
  output: "export",
  images: {
    unoptimized: true, // ✅ Allow <Image /> to work with static export
  },
};

export default nextConfig;
