/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  i18n: {
    localeDetection: false,
    defaultLocale: 'en-US',
    locales: ['en-US', 'jp'],
  }
}

module.exports = nextConfig
