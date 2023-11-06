/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    domains: ["cdn.imagin.studio"],
  },
  env: {
    rapidApiKey: "757131ee3amsh55bec6519d870bbp1e561ajsn9b9e26c29f3e",
    imaginApiKey: "hrjavascript-mastery",
  },
  typescript: {
    ignoreBuildErrors: true,
  },
};

module.exports = nextConfig;
