module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      screens:{
        "sm":"480px"
      },
      gridTemplateColumns: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
        'wide': '200px 1fr',
        'slim': '1fr',
      },
      gridTemplateRows: {
        'auto-fit': 'repeat(auto-fit, minmax(200px, 1fr))',
        'auto-fill': 'repeat(auto-fill, minmax(200px, 1fr))',
        'wide': '50px 1fr',
        'slim': '50px 1fr',
      },
      gridTemplateAreas: {
        'wide': [
          'header header',
          'sidebar main',
          'sidebar footer',
        ],
        'slim': [
          'header',
          'main',
          'footer',
        ]
      },
    },
  },
  plugins: [
    require("tailwindcss-radix")(),
    require('@savvywombat/tailwindcss-grid-areas')
  ],
  variants: {
    gridTemplateAreas: ['responsive']
  }
}
