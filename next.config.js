/* eslint-disable @typescript-eslint/no-var-requires */
const withTwin = require('./config/withTwin.js')

/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  compiler: {
    styledComponents: true,
  },
}

module.exports = withTwin(nextConfig)
