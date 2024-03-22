/** @type {import('tailwindcss').Config} */
export default {
   content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
   theme: {
      extend: {
         lineHeight: {
            2: '2%',
         },
      },
      colors: {
         green: {
            50: '#C7F2AB',
         },
         blue: {
            50: '#1668E8',
         },
         white: {
            50: '#FFF',
            100: '#F7F7F7',
         },
         black: {
            50: '#000',
         },
         gray: {
            50: '#CCCCCC',
         },
      },
      fontFamily: {
         'work-sans': ['Work-Sans', 'sans-serif'],
         inter: ['Inter', 'sans-serif'],
      },
   },
   plugins: [],
};
