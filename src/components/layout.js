import React from "react"
import Navigation from "./navigation"
import NavMenu from "./navMenu"


class Layout extends React.Component {
  render() {
    return (
      <div>
        <NavMenu />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
