import type { NextConfig } from "next";

const nextConfig: NextConfig = {
  images: {
    remotePatterns: [new URL('https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQqSeFVyo8KOrksQuHBQjLCyQ9dwuefXulcoWHCvu3-bRDWpOjADk7hHUJ9VZJgoUkMZF4&usqp=CAU')],
  },
};

export default nextConfig;