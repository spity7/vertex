/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  output: "standalone",

  async redirects() {
    return [
      {
        source: "/auth",
        destination: "https://dashboard.vertex-engineering.co",
        permanent: false, // change to true if you want a 308 permanent redirect
      },
    ];
  },
};

module.exports = nextConfig;
