// eslint-disable-next-line @typescript-eslint/no-require-imports
const path = require('path')

const resolvePath = p => path.resolve(__dirname, p)

module.exports = {
  webpack: {
    alias: {
      '@components': resolvePath('./src/components'),
      '@styles': resolvePath('./src/styles'),
      '@utils': resolvePath('./src/utils'),
      '@type': resolvePath('./src/type'),
      '@constants': resolvePath('./src/constants'),
      '@icons': resolvePath('./src/assets/icons'),
      '@images': resolvePath('./src/assets/images'),
      '@contexts': resolvePath('./src/contexts'),
    }
  },
}
