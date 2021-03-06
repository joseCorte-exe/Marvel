module.exports = {
  images: {
    domains: ['i.annihil.us', 'avatars.githubusercontent.com'],
  },
  experimental: {
    // ssr and displayName are configured by default
    styledComponents: true,
  },
  reactStrictMode: true,
  env: {
    BASE_URL: process.env.BASE_URL,
  }
}
