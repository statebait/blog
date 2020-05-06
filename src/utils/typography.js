import Typography from "typography"
import parnassusTheme from "typography-theme-parnassus"

const typography = new Typography(parnassusTheme)

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
