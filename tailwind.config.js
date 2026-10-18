/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#052A33',
        deep: '#083C49',
        teal: '#0E7C8F',
        aqua: '#29B6D3',
        sky: '#8EE3F2',
        foam: '#E6F8FB',
        mist: '#F5FCFD',
        sun: '#FFC93C',
        sunsoft: '#FFE9A8',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(8,60,73,0.35)',
        glow: '0 10px 34px -6px rgba(41,182,211,0.6)',
        sun: '0 10px 30px -6px rgba(255,201,60,0.7)',
      },
      keyframes: {
        rise: {
          '0%': { transform: 'translateY(0) scale(.6)', opacity: '0' },
          '15%': { opacity: '.9' },
          '100%': { transform: 'translateY(-110vh) scale(1.1)', opacity: '0' },
        },
        marquee: { to: { transform: 'translateX(-50%)' } },
        sway: { '0%,100%': { transform: 'rotate(-8deg)' }, '50%': { transform: 'rotate(8deg)' } },
        shine: { '0%': { backgroundPosition: '0% 50%' }, '100%': { backgroundPosition: '200% 50%' } },
      },
      animation: {
        rise: 'rise 12s linear infinite',
        marquee: 'marquee 34s linear infinite',
        sway: 'sway 3.2s ease-in-out infinite',
        shine: 'shine 4s linear infinite',
      },
    },
  },
  plugins: [],
};
