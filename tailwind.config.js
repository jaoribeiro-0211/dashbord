// eslint-disable-next-line no-undef
const palette = require('./palette')
module.exports = {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],

  theme: {
    fontFamily: {
      regular: ['RobotoRegular'],
      medium: ['RobotoMedium'],
      bold: ['RobotoBold'],
      black: ['RobotoBlack']
    },
    extend: {
      colors: palette
    }
  },
  plugins: []
}
