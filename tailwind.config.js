/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily:{
        'Kumbh':['Kumbh Sans','sans-serif']
      },
      backgroundColor:{
        'Cyan':'hsl(185, 75%, 39%)'
      },
      colors:{
        'DarkCyan':'hsl(229, 23%, 23%)',
        'VDDB':'hsl(227, 10%, 46%)'
      },
      screens:{
        'smX':{'max':'321px'},
        'smM':{'max':'376px'},
        'smL':{'max':'426px'},
        'md': {'max': '767px'}
      },
      spacing:{
        'HoldV':'130px',
        'HoldH':'163px',
        'HoldMH':'115px'
      },
      fontSize:{
        'Fixed':'18px'
      },
      backgroundImage:{
        'Top':'url("../src/Components/Images/bg-pattern-top.jpg")',
        'Bottom':'url("../src/Components/Images/bg-pattern-bottom.jpg")'
      }
    },
  },
  plugins: [],
}

