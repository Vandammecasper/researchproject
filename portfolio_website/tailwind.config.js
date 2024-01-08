/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      screens:{
        '3xl' : '1920px',
        maxlg : {max: '1023.5px'}
      },
      rotate:{
        270: '270deg'
      }
    },
  },
  plugins: [],
}
