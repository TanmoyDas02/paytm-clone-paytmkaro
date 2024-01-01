/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["*"],
  theme: {
    extend: {
      colors: {
        neel: "#00baf2",
        darkNeel: "#002970",
        lightColor: "#f6f6f6",
        lightNeel: "#00afe3",
        lightdarkNeel: "#0f4a8a",
        bgColor: "#f5f7fa",
        ultralightneel: "#4ccff6",
        line:'#cccccc'
      },
      screens: {
        "verysmall" : {'max' : "399px"},
        "small" : {'max' : "550px"},
        "medium" : {'max' : "768px"},
        "large" : {'max' : "1070px"}
      } 
    },
  },
  plugins: [],
}

