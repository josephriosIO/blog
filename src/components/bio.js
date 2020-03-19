import React from "react"
import { useStaticQuery, graphql } from "gatsby"
import img from '../assets/profile-pic.jpg'
import { rhythm } from "../utils/typography"

const Bio = () => {
  const data = useStaticQuery(graphql`
    query {
      placeholderImage: file(relativePath: { eq: "profile-pic.jpg" }) {
        childImageSharp {
          fluid(maxWidth: 100) {
            ...GatsbyImageSharpFluid_tracedSVG
          }
        }
      }
    }
  `)

  return (
    <div
      style={{
        display: `flex`,
        marginBottom: rhythm(1),
      }}
      className="bio"
    >
      <div
        style={{
          marginRight: rhythm(1 / 2),
          marginBottom: 0,
          width: rhythm(2),
          height: rhythm(2),
          borderRadius: "50%",
          overflow: "hidden",
        }}
      >
        <img src={img} alt="Joseph Rios" />
      </div>
      <p style={{ maxWidth: 180 }}>
       <strong>Joseph Rios</strong>
        <br />
        <div>
				<a href={`https://twitter.com/rustonconsole`} style={{
					backgroundColor: '#38a1f3',
					color: '#fff',
					display: 'inline-flex',
					cursor: 'pointer',
					padding: '7px 8px',
					margin: '3px 1.5px',
					borderRadius: '3px',
				}}>
					<i className='icon-twitter'></i>
					<span style={{
						marginLeft: '6px',
					}}>Follow</span>
        </a>
				</div>
      </p>
    </div>
  )
}

export default Bio
