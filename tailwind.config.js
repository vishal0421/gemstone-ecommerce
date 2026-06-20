export default {
  content: ['./index.html', './src/**/*.{js,jsx}'],
  theme: {
    extend: {
      colors: {
        primary: '#7C3AED',
        secondary: '#A855F7',
        accent: '#FBBF24',
        surface: 'rgba(255,255,255,0.08)',
        surfaceStrong: 'rgba(255,255,255,0.12)',
        surfaceSoft: 'rgba(255,255,255,0.04)'
      },
      boxShadow: {
        glass: '0 30px 80px rgba(0,0,0,0.35)',
        glow: '0 0 30px rgba(124,58,237,0.35)'
      },
      backgroundImage: {
        'hero-glow': 'radial-gradient(circle at top left, rgba(124,58,237,0.32), transparent 35%), radial-gradient(circle at bottom right, rgba(251,191,36,0.20), transparent 30%)'
      },
      fontFamily: {
        sans: ['Inter', 'ui-sans-serif', 'system-ui', 'sans-serif']
      }
    }
  },
  plugins: []
};
