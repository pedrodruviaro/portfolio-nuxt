import type { Config } from "tailwindcss"

export default <Partial<Config>>{
  theme: {
    extend: {
      fontFamily: {
        base: ["Montserrat", "system-ui", "sans-serif"],
        heading: ["Barlow Condensed", "Montserrat", "system-ui", "sans-serif"],
      },
      colors: {
        brand: {
          light: {
            100: "#ffffff",
            200: "#f2f2f2",
            700: "#303030",
            primary: "#ff793f",
          },
        },
      },
    },
  },
}
