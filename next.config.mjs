/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "lh3.googleusercontent.com",
        // pathname: "next-auth-v5-test1/**",
      },
    ],
  },
};

export default nextConfig;
