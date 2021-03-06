import React, { useState, useCallback } from "react"
import { Link } from "gatsby"
import { ThemeToggler } from "gatsby-plugin-dark-mode"
import Switch from "react-switch"
import { rhythm, scale } from "../utils/typography"

import checkedIcon from "../assets/svg/sun-solid.svg"
import uncheckedIcon from "../assets/svg/moon-solid.svg"

function Layout(props) {
  const [state, setState] = useState({ toggle: false })

  const handleChange = useCallback(
    (toggleTheme) => {
      toggleTheme(state.toggle ? "dark" : "light")
      setState({ toggle: !state.toggle })
    },
    [state.toggle]
  )

  const { title, children } = props

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
              onChange={() => handleChange(toggleTheme)}
              checked={theme === "dark"}
              offColor="#000"
              onColor="#fff"
              onHandleColor="#000"
              checkedIcon={
                <img
                  src={checkedIcon}
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
                  src={uncheckedIcon}
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
            gridTemplateColumns: "repeat(5, max-content)",
            gridGap: 10,
            color: "#8a75f5",
          }}
        >
          <a href="/">Home</a>.
          <a
            href="https://www.github.com/statebait"
            target="_blank"
            rel="noopener noreferrer"
          >
            GitHub
          </a>
        </div>
        <br />© {new Date().getFullYear()} Mohamed Shadab
      </footer>
    </div>
  )
}

export default Layout
