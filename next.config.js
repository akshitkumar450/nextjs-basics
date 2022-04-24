/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    domains: ["images.unsplash.com"],
  },
  // redirects: async () => {
  //   return [
  //     {
  //       source: "/",
  //       destination: "https://www.google.com",
  //       permanent: false,
  //     },
  //   ];
  // },
};

module.exports = nextConfig;
