import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"
import "../js/main.js"
import "../scss/main.scss"

const Layout = props => {
  return (
    <div>
      <Navigation />
      <div>{props.children}</div>
      <Footer />
      <script src="js/main.js"></script>
    </div>
  )
}

export default Layout
