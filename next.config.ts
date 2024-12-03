import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  sassOptions: {
    logger: {
      warn: (message: string) => console.log(message)
    }
  }
};

export default nextConfig;