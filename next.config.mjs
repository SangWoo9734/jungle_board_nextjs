/** @type {import('next').NextConfig} */
const nextConfig = {
  async redirects() {
    return [
      {
        source: "/",
        destination: "/post/board",
        permanent: true,
      },
    ];
  },
};

export default nextConfig;
