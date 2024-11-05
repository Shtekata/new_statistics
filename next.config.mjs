/** @type {import('next').NextConfig} */

// const nextConfig = {}
const nextConfig = {
  experimental: {
    ppr: 'incremental',
    reactCompiler: true,
  },
}

export default nextConfig
