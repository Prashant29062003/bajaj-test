/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {},
  },
  plugins: [],
}


// curl -X POST http://localhost:5000/bfhl/ -H "Content-Type: application/json" -d '{"data": ["A", "C", "z"]}'
