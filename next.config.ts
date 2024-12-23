import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  /* config options here */
  images: {
    domains: ["localhost", "res.cloudinary.com","images.unsplash.com","assets.aceternity.com","amazonaws.com","tourism-images.s3.ap-south-1.amazonaws.com"],
  },
};

export default nextConfig;
