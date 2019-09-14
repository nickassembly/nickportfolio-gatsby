import React from "react"
import Navigation from "./navigation"



class Layout extends React.Component {
  render() {
    return (
      <div>
        <Navigation />
        <div>{this.props.children}</div>
      </div>
    )
  }
}

export default Layout
