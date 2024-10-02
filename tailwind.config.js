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
          primary: "#2E7D32",           // Dark green for primary buttons/links
          secondary: "#8B7E59",         // Dark beige for secondary accents
          accent: "#FFC107",            // Brighter yellow accent for contrast
          neutral: "#D9D9D9",           // Lighter gray for neutral backgrounds in dark mode
          "base-100": "#F5F5F5",        // Light gray background for dark mode
          "base-content": "#000000",    // Black text for dark mode
          info: "#3ABFF8",              // Info color (unchanged)
          success: "#36D399",           // Success color (unchanged)
          warning: "#FBBD23",           // Warning color (unchanged)
          error: "#F87272",             // Error color (unchanged)
        }
      },
    ]
  },
  darkTheme: 'dark' // this will be the default dark theme

}

