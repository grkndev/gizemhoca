/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: "https",
        hostname: "cdnqrmenu.s3.eu-west-1.amazonaws.com",
        port:'',
        pathname: "/grkn/**",
      },
    ],
  },
};

module.exports = nextConfig;
