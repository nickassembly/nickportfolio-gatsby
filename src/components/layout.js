import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

const Layout = props => {
  return (
    <div>
      <div>
        <Navigation />
        {props.children}
      </div>
      <Footer />
    </div>
  )
}

export default Layout
