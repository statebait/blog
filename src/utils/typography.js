import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"

const typography = new Typography({
  ...parnassusTheme,
  googleFonts: [
    {
      name: "Merriweather Sans",
      styles: ["800"],
    },
    {
      name: "Open Sans",
      styles: ["400", "400i", "700"],
    },
  ],
  bodyFontFamily: ["Open Sans", "sans-serif"],
})

parnassusTheme.overrideThemeStyles = () => {
  return {
    "a.gatsby-resp-image-link": {
      boxShadow: `none`,
    },
  }
}

if (process.env.NODE_ENV !== `production`) {
  typography.injectStyles()
}

// Export helper functions
export const { scale, rhythm, options } = typography
export default typography
