// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@styles': resolvePath('./src/styles'),
      '@utils': resolvePath('./src/utils')
    }
  },
}
