/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
 
    // Or if using `src` directory:
    "./src/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {  screens: {
        lg: '1200px',
      },
       fontFamily: {
        inter: ["var(--font-inter)"], // ✅ now usable in Tailwind
      },
    },
  },
  plugins: [
   
  ],
}

