const WebpackSubresourceIntegrity = require('webpack-subresource-integrity');

module.exports = {
  configureWebpack: config => {
    config.plugins.push(
      new WebpackSubresourceIntegrity({
        hashFuncNames: ['sha256', 'sha384'],
        enabled: process.env.NODE_ENV === 'production',
      }),
    )
  }
}