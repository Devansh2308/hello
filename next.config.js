




// const withSass = require('@zeit/next-sass')
// module.exports = withSass({
  
// })

const withImages = require('next-images')
const withSass = require('@zeit/next-sass')

module.exports = withImages(
  withSass({
    webpack(config, options) {
      // Further custom configuration here
      return config
    },
  })
)