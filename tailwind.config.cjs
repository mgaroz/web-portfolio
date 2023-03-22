/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      bgm: ['Basis Grotesque Pro Medium', 'sans-serif'],
      bgr: ['Basis Grotesque Pro Regular', 'sans-serif']
    },
    extend: {
      colors: {
        'mine-shaft': {
          DEFAULT: '#222222',
          50: '#7E7E7E',
          100: '#747474',
          200: '#5F5F5F',
          300: '#4B4B4B',
          400: '#363636',
          500: '#222222',
          600: '#060606',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
        'gallery': {
          DEFAULT: '#EEEEEE',
          50: '#FFFFFF',
          100: '#FFFFFF',
          200: '#FFFFFF',
          300: '#FFFFFF',
          400: '#FFFFFF',
          500: '#EEEEEE',
          600: '#D2D2D2',
          700: '#B6B6B6',
          800: '#9A9A9A',
          900: '#7E7E7E'
        },
        'cod-gray': {
          DEFAULT: '#171717',
          50: '#737373',
          100: '#696969',
          200: '#545454',
          300: '#404040',
          400: '#2B2B2B',
          500: '#171717',
          600: '#000000',
          700: '#000000',
          800: '#000000',
          900: '#000000'
        },
      },
      fontSize: {
        hero: '8.29125rem',
        h1: '4.8231875rem',
        h2: '3.76375rem',
        h3: '2.8425rem',
        h4: '2.1055rem',
        h5: '1.276375rem',
        h6: '0.875rem',
        quote: '1.5rem',
      }
    },
  },
  plugins: [
    require('@tailwindcss/forms')
  ],
}
