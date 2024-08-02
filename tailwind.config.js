import daisyui from 'daisyui'

export default {
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'fade-in': 'fade-in 1.2s cubic-bezier(0.390, 0.575, 0.565, 1.000)   both'
      },
      keyframes: {
        'fade-in': {
          '0%': {
            opacity: '0'
          },
          to: {
            opacity: '1'
          }
        }
      }
    }
  },
  variants: {
    extend: {}
  },
  plugins: [daisyui],
  daisyui: {
    themes: ['light']
  }
}
