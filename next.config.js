/** @type {import('next').NextConfig} */
const nextConfig = {}

module.exports = nextConfig
// const withPlugins = require("next-compose-plugins");
// const withImages = require("next-images");
// module.exports = withPlugins([], {});
// module.exports = withImages();
module.exports = {
    images: {
      domains: ['content.fortune.com',"www.marketscreener.com","c.biztoc.com"],
    },
  };