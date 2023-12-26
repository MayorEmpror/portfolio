/** @type {import('next').NextConfig} */
const withVideos = require('next-videos')
const nextConfig = {

    // jsc.transform.react.throwIfNamespace
    images: {
        domains: ['gpm.nasa.gov'],
      },
}

module.exports = nextConfig
