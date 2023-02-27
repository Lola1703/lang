/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  swcMinify: true,
  i18n: {
    locales: ["uz", "en", "tr","af-ZA"],
    defaultLocale: "en",
  },
};

module.exports = nextConfig;
