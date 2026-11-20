/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['Space Grotesk', 'sans-serif'],
        body: ['Inter', 'sans-serif'],
      },
      colors: {
        editorial: {
          bg: '#090a0f',
          surface: '#10121a',
          card: '#151824',
          subtle: '#94a3b8',
          border: 'rgba(255, 255, 255, 0.08)',
        },
      },
      spacing: { base: 'var(--space-base)' },
      borderRadius: {
        small: 'var(--radius-small)',
        large: 'var(--radius-large)',
      },
      boxShadow: {
        custom: 'var(--shadow-custom)',
        'custom-hover': 'var(--shadow-custom-hover)',
      },
      keyframes: {
        fadeIn: { '0%': { opacity: '0' }, '100%': { opacity: '1' } },
        scaleIn: { '0%': { opacity: '0', transform: 'scale(0.95) translateY(12px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
      },
      animation: {
        fadeIn: 'fadeIn 0.25s cubic-bezier(0.16, 1, 0.3, 1) forwards',
        scaleIn: 'scaleIn 0.3s cubic-bezier(0.16, 1, 0.3, 1) forwards',
      },
    },
  },
  plugins: [],
}