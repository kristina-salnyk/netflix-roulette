const theme = Object.freeze({
  breakpoints: {
    mobile: '767px',
    tablet: ['768px', '1199px'],
    desktop: '1200px',
  },
  colors: {
    accent: '#F65261',
    lightGray: '#555555',
    darkGray: '#424242',
    black: '#232323',
    white: '#FFFFFF',
    input: '#323232',
    border: '#979797',
    icon: '#2A202D',
  },
  spacing: {
    4: '4px',
    8: '8px',
    16: '16px',
    30: '30px',
    32: '32px',
    48: '48px',
    64: '64px',
    128: '128px'
  },
  shape: {
    borderWidth: {s: '1px', m: '2px', xl: '4px'},
    borderRadius: {s: '4px', m: '8px', xl: '50px'},
  },
  animation: {
    opacity: 0.8,
    cubicBezier: '0.5s cubic-bezier(0.7, 0.98, 0.86, 0.98)',
  },
  typography: {
    font: {
      primary: ['Noto Sans, sans-serif'],
    },
    size: {
      10: '10px',
      12: '12px',
      14: '14px',
      16: '16px',
      18: '18px',
      20: '20px',
      24: '24px',
      28: '28px',
      32: '32px',
      40: '40px',
      48: '48px',
    },
    weight: {
      light: 300,
      regular: 400,
      medium: 500,
      semiBold: 600,
      bold: 700,
    },
  },
})

export default theme
