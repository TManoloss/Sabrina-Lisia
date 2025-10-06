/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
      './src/components/**/*.{js,ts,jsx,tsx,mdx}',
      './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    ],
    theme: {
      extend: {
        colors: {
          balaio: {
            green: '#586040',
            beige: '#F5F1E8',
            dark: '#1A1A1A',
          }
        },
        fontFamily: {
          sans: ['var(--font-inter)', 'system-ui', 'sans-serif'],
          serif: ['var(--font-playfair)', 'Georgia', 'serif'],
        },
      },
    },
    plugins: [],
  }