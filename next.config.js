/** @type {import('next').NextConfig} */
const nextConfig = {
  images: { unoptimized: true },
  reactStrictMode: true,
  redirects: async() => {
    return[
      {
        source: '/recover-qrcode',
        destination: '/admin',
        permanent: true
      }
    ]
  }
}

module.exports = nextConfig
