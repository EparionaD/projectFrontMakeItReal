module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      height: {
        280: '70rem',
        320: '80rem',
      },
      colors: {
        primary: {
          DEFAULT: '#FBCB04',
          100: '#fbd01d',
          200: '#fcd536',
          300: '#fcdb4f',
          400: '#e2b704',
          500: '#c9a203',
          600: '#b08e03',
        },
        secundary: '#EE4266',
        third: '#3CBBB1',
        fourth: '#C4CBCA',
      },
      backgroundImage: {
        footerColor:
          'linear-gradient(to left, #f4889f, #f47c95, #f3708b, #f26480, #f15675, #ee4d6c, #eb4364, #e7385b, #e23053, #dc284b, #d71e43, #d1133b)',
      },
    },
  },
  plugins: [],
};
