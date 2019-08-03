import React from "react"
import "../scss/main.scss"
import { graphql, useStaticQuery } from "gatsby";

const Footer = () => {

  const data = useStaticQuery(graphql`
    query {
      site {
        siteMetadata {
          author
        }
      }
    }
  `)

  return (
    <div>
      <footer id="main-footer">Copyright &copy; 2019 {data.site.siteMetadata.author} </footer>
    </div>
  )

}

export default Footer
