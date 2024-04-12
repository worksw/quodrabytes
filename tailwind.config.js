/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      Anton: "Anton, sans-serif",
      Outfit: "Outfit, sans-serif",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        "about-banner": "url('./assets/images/bannerabout.png')",
        "aboutus-banner": "url('./assets/images/aboutbanner.png')",
        "our-servicebanner": "url('./assets/images/ourservicebanner.png')",
        "contact-banner": "url('./assets/images/contactbanner.png')",
      },
      colors: {
        "primary-color": "#38b6ff",
        "secondary-color": " #232425",
        "grey-color": "#444444",
        "text-color": "#B2B2B2",
      },
    },
  },
  plugins: [],
};
