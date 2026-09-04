const path = require('path')

/** @type {import('next').NextConfig} */
module.exports = {
  transpilePackages: ['@velocityuikit/velocityui'],
  outputFileTracingRoot: path.join(__dirname, '../../'),
  ...(process.env.NEXT_OUTPUT_STANDALONE === '1' ? { output: 'standalone' } : {}),
}
