import React from "react"
import Header from "./header"

class Layout extends React.Component {
  render() {
    const { title, children, location } = this.props
    // const rootPath = `${__PATH_PREFIX__}/`
    // let header

    // if (location.pathname === rootPath) {
    //   header = (
    //     <h1
    //       style={{
    //         ...scale(1.5),
    //         marginBottom: rhythm(1.5),
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h1>
    //   )
    // } else {
    //   header = (
    //     <h3
    //       style={{
    //         fontFamily: `Montserrat, sans-serif`,
    //         marginTop: 0,
    //       }}
    //     >
    //       <Link
    //         style={{
    //           boxShadow: `none`,
    //           textDecoration: `none`,
    //           color: `inherit`,
    //         }}
    //         to={`/`}
    //       >
    //         {title}
    //       </Link>
    //     </h3>
    //   )
    // }
    return (
      <div className="container">
        <div className="content">
          <Header siteTitle={title} location={location}/>
          <main>{children}</main>
        </div>
        <footer style={{display: 'flex', alignContent: 'center', justifyContent: 'center', marginBottom: '45px'}}>
          © {new Date().getFullYear()} <a
              href="https://josephrios.dev"
              target="_blank"
              rel="noopener noreferrer"
            >
							{' '}Joseph Rios
            </a>
        </footer>
      </div>
    )
  }
}

layout.defaultProps = {
  location: {},
}

export default Layout
