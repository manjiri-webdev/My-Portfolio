/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      theme: {
        extend: {
          fontFamily: {
            heading: ['var(--font-heading-name)', 'sans-serif'],
            body: ['var(--font-body-name)', 'sans-serif'],
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
            scaleIn: { '0%': { opacity: '0', transform: 'scale(0.92) translateY(16px)' }, '100%': { opacity: '1', transform: 'scale(1) translateY(0)' } },
            ping: { '75%, 100%': { transform: 'scale(2)', opacity: '0' } },
            pulse: { '0%, 100%': { opacity: '1' }, '50%': { opacity: '.5' } },
            bounce: { '0%, 100%': { transform: 'translateY(0)' }, '50%': { transform: 'translateY(6px)' } },
          },
          animation: {
            fadeIn: 'fadeIn 0.2s ease forwards',
            scaleIn: 'scaleIn 0.28s cubic-bezier(0.22,1,0.36,1) forwards',
          },
        }
      }
    },
  },
  plugins: [],
}