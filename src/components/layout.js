import React from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Switch from "react-switch"
import { rhythm, scale } from "../utils/typography"

class Layout extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      toggle: false,
    }
  }

  handleChange = (toggleTheme) => {
    toggleTheme(this.state.toggle ? "dark" : "light")
    this.setState({ toggle: !this.state.toggle })
  }

  render() {
    const { title, children } = this.props
    let header = (
      <h1
        style={{
          ...scale(0.8),
          marginBottom: rhythm(1.5),
          marginTop: 0,
          marginRight: "30%",
        }}
      >
        <Link
          style={{
            boxShadow: `none`,
            textDecoration: `none`,
            color: `inherit`,
          }}
          to={`/`}
        >
          {title}
        </Link>
      </h1>
    )

    return (
      <div
        style={{
          marginLeft: `auto`,
          marginRight: `auto`,
          maxWidth: rhythm(24),
          padding: `${rhythm(1.5)} ${rhythm(3 / 4)}`,
        }}
      >
        <header style={{ display: "flex" }}>
          {header}
          <ThemeToggler>
            {({ theme, toggleTheme }) => (
              <Switch
                aria-label="dark/light mode toggle"
                onChange={() => this.handleChange(toggleTheme)}
                checked={theme === "dark"}
                offColor="#000"
                onColor="#fff"
                onHandleColor="#000"
                checkedIcon={
                  <img
                    src={require("../assets/svg/sun-solid.svg")}
                    style={{
                      margin: 6,
                      width: 17,
                      height: "auto",
                    }}
                    alt="."
                  />
                }
                uncheckedIcon={
                  <img
                    src={require("../assets/svg/moon-solid.svg")}
                    style={{
                      margin: 6,
                      width: 17,
                      height: "auto",
                    }}
                    alt="."
                  />
                }
                aria-checked={theme === "dark"}
              />
            )}
          </ThemeToggler>
        </header>
        <main>{children}</main>
        <footer>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, max-content)",
              gridGap: 10,
              color: "#8a75f5",
            }}
          >
            <a
              href="https://www.github.com/statebait"
              target="_blank"
              rel="noopener noreferrer"
            >
              GitHub
            </a>
            .
            <a href="/rss.xml" target="_blank" rel="noopener noreferrer">
              RSS
            </a>
          </div>
          <br />© {new Date().getFullYear()} Mohamed Shadab, Built with
          {` `}
          <a href="https://www.gatsbyjs.org">Gatsby</a>
        </footer>
      </div>
    )
  }
}

export default Layout
