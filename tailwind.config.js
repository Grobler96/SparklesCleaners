/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: '#0A0F3D',
        deep: '#14217A',
        teal: '#0057FF',
        aqua: '#00C8FF',
        sky: '#7FE3FF',
        foam: '#E3F7FF',
        mist: '#F4FCFF',
        sun: '#FFD60A',
        pop: '#FF2E93',
        sunsoft: '#FFF0A3',
      },
      fontFamily: {
        display: ['Poppins', 'system-ui', 'sans-serif'],
        body: ['Inter', 'system-ui', 'sans-serif'],
      },
      boxShadow: {
        soft: '0 24px 60px -24px rgba(10,15,61,0.35)',
        glow: '0 10px 34px -6px rgba(0,120,255,0.55)',
        pop: '0 10px 34px -6px rgba(255,46,147,0.65)',
        sun: '0 10px 30px -6px rgba(255,214,10,0.7)',
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
