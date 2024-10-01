/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // This ensures Tailwind scans all Angular HTML and TypeScript files for classes
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#A3BE8C', // Light green from the trees
          DEFAULT: '#88B04B', // Main green
          dark: '#4B6B3D', // Darker green for accents
        },
        secondary: {
          light: '#EDEBD7', // Light beige for background
          DEFAULT: '#D2C7A7', // Main beige for background or text areas
          dark: '#8B7E59', // Dark beige or light brown for accents
        },
        accent: {
          DEFAULT: '#4B3621', // Dark brown for borders, headers, etc.
        },
      },
      fontFamily: {
        body: ['"Open Sans"', 'sans-serif'], // Clean font for readability
        heading: ['"Merriweather"', 'serif'], // For headings to give it a more traditional look
      },
    },
  },
  plugins: [
    require('daisyui') // Add DaisyUI as a plugin
  ],
  daisyui: {
    themes: [
      {
        light: {
            'primary': '#88B04B',
            'secondary': '#D2C7A7',
            'accent': '#4B3621',
            'neutral': '#EDEBD7',
            'base-100': '#FFFFFF',
            'info': '#93C5FD',
            'success': '#36D399',
            'warning': '#FBBD23',
            'error': '#F87272',
        },
        dark: {
          primary: "#2E7D32",        // Darker green
          secondary: "#5D4037",      // Dark brown
          accent: "#FFC107",         // Brighter yellow accent
          neutral: "#1A1A1A",        // Dark background
          "base-100": "#333333",     // Dark gray background for content
          info: "#3ABFF8",           // Same for both light and dark
          success: "#36D399",        // Same for both light and dark
          warning: "#FBBD23",        // Same for both light and dark
          error: "#F87272",          // Same for both light and dark
        },
      },
    ]
  },
  darkTheme: 'dark' // this will be the default dark theme

}

