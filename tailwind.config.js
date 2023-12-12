/** @type {import('tailwindcss').Config} */

export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        type: 'type 2.7s ease-out .8s infinite alternate both',
        cursor: 'cursor .6s linear infinite alternate',
        shade: 'shade 20s ease-in-out infinite alternate',
        actionAnimTr: 'actionAnimTr 0.3s forwards'
      },
      keyframes: {
        type: {
          '0%': { width: '0ch' },
          '5%, 10%': { width: '1ch' },
          '15%, 20%': { width: '2ch' },
          '25%, 30%': { width: '3ch' },
          '35%, 40%': { width: '4ch' },
          '45%, 50%': { width: '5ch' },
          '55%, 60%': { width: '6ch' },
          '65%, 70%': { width: '7ch' },
          '75%, 80%': { width: '8ch' },
          '83%, 87%': { width: '9ch' },
          '92%, 96%': { width: '10ch' },
          '99%': { width: '11ch' },
        },
        cursor: {
          "0%" : {},
          "40%" : { opacity: 1 },
          "60%" : {},
          "100%" : { opacity: 0 }
        }, 
        shade: {
          "0%" : { opacity: .9 },
          "25%" : { opacity: .35 },
          "40%" : { opacity: .7 },
          "60%" : { opacity: .45 },
          "100%" : { opacity: .65 }
        },
        actionAnimTr: {
          "60%" : { transform: "scale3d(0.8, 0.8, 1)" },
          "85%" : { transform: "scale3d(1.1, 1.1, 1)" },
          "100%" : { transform: "scale3d(1, 1, 1)" }
        },
      },
    },
  },
}