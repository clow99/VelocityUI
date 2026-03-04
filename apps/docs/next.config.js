const path = require('path')

/** @type {import('next').NextConfig} */
const nextConfig = {
  transpilePackages: ['@velocityuikit/velocityui'],
  ...(process.env.NEXT_OUTPUT_STANDALONE === '1'
    ? {
        output: 'standalone',
        experimental: {
          outputFileTracingRoot: path.join(__dirname, '../../'),
        },
      }
    : {}),
}

module.exports = nextConfig
