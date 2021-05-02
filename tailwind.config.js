module.exports = {
  mode: "jit",
  purge: ['./pages/**/*.{js,ts,jsx,tsx}', './components/**/*.{js,ts,jsx,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    fill: {
      current: 'currentColor',
      white: 'white',
      'brand-color': '#E50914',
    },
    extend: {
      colors: {
        'brand-color': '#E50914',
      },
      boxShadow: {
        glow: '0 0 0px 3px #e6e6e6',
      },
    },
    fontFamily: {
      sans: ['Netflix Sans', 'Helvetica Neue', 'Helvetica', 'Arial', 'sans-serif'],
    },
  },
  variants: {
    extend: {
      margin: ['last'],
      boxShadow: ['hover'],
      fill: ['hover', 'group-hover'],
    },
  },
  plugins: [],
}
