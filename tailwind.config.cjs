/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        playfair: ['Playfair Display', 'serif'],
        roboto: ['Roboto', 'sans-serif'],
      },
      backgroundImage: {
        detailsMarker: "url('assets/details_arrow.png')",
        lines: "url('assets/noisy.png'), url('assets/line.png'), url('assets/line.png')"
      },
      backgroundPosition: {
        linesPositions: "center, top right, bottom left"
      },
      fontSize: {
        title: 'clamp(1rem, 4vw + 1rem, 3.5rem)',
        howWorksTitle: 'clamp(1rem, 2vw + 1rem, 2.25rem)',
        howWorkSub: 'clamp(1rem, 1vw + 1rem, 1.875rem)',
        call: "clamp(1rem, 1vw + 1rem, 3rem)",
        faq: "clamp(.8rem, 1vw + .1rem, 1.25rem)",
        faqTitle: "clamp(1rem, 1vw + .5rem, 2rem)"
      }
    },
  },
  plugins: [],
}