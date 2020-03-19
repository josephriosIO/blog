import React from "react"
import AniLink from "gatsby-plugin-transition-link/AniLink"
import PropTypes from "prop-types"
import Headroom from "react-headroom"
import { ThemeToggler } from "gatsby-plugin-dark-mode"

import pic01 from '../assets/moon.png'
import pic02 from '../assets/sun.png'

class Header extends React.Component {
  render() {
		const { siteTitle, location } = this.props
    return (
      <header>
        <Headroom>
          <div className="navbar">
					<div>
						{location.pathname === '/' ? null : (
						<h1>
              <AniLink cover direction="down" bg="#89cff0" to="/">
							← {siteTitle}
              </AniLink>
            </h1>)}
						</div>
            <ThemeToggler>
              {({ theme, toggleTheme }) => (
                <label className="tog">
                  <input
                    type="checkbox"
                    onChange={e =>
                      toggleTheme(e.target.checked ? "dark" : "light")
                    }
                    checked={theme === "dark"}
                  />
                  {theme === "dark" ? (
                    <div>
											<img src={pic02} alt='moon' />
                    </div>
                  ) : (
                    <div>
												<img src={pic01} alt='sun'/>
                    </div>
                  )}
                </label>
              )}
            </ThemeToggler>
          </div>
        </Headroom>
      </header>
    )
  }
}

export default Header
