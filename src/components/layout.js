import React from "react"
import Navigation from "./navigation"
import Footer from "./footer"

class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>{this.props.children}</div>
        <Footer />
      </div>
    )
  }
}

export default Layout
