/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}", // This ensures Tailwind scans all Angular HTML and TypeScript files for classes
  ],
  theme: {
    extend: {},
  },
  plugins: [
    require('daisyui') // Add DaisyUI as a plugin
  ],
  daisyui: {
    themes: [
      {
        light: {
          primary: "#4CAF50",        // Earthy green
          secondary: "#8C6A43",      // Warm brown
          accent: "#FFDD57",         // Soft yellow
          neutral: "#F5F5F5",        // Light background
          "base-100": "#FFFFFF",     // White background for content
          info: "#3ABFF8",           // Blue for info messages
          success: "#36D399",        // Green for success
          warning: "#FBBD23",        // Yellow for warnings
          error: "#F87272",          // Red for errors
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

