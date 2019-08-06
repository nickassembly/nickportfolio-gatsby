import React from "react"
import { Link } from "gatsby"
import "../scss/main.scss"

// TODO: warning for not using setState() below

class Navigation extends React.Component {
  constructor(props) {
    super(props)
    this.toggleMenu = this.toggleMenu.bind(this)
  }

  state = {
    open: false,
  }

  toggleMenu = () => {
    this.state.open = !this.state.open

    const menuBtn = document.querySelector(".menu-btn")
    const menu = document.querySelector(".menu")
    const menuNav = document.querySelector(".menu-nav")
    const menuBranding = document.querySelector(".menu-branding")
    const navItems = document.querySelectorAll(".nav-item")

    if (this.state.open) {
      menuBtn.classList.add("close")
      menu.classList.add("show")
      menuNav.classList.add("show")
      menuBranding.classList.add("show")
      navItems.forEach(item => item.classList.add("show"))
    } else {
      menuBtn.classList.remove("close")
      menu.classList.remove("show")
      menuNav.classList.remove("show")
      menuBranding.classList.remove("show")
      navItems.forEach(item => item.classList.remove("show"))
    }
  }

  render() {
    return (
      <div>
        <header>
          <div className="menu-btn" onClick={this.toggleMenu}>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
            <div className="btn-line"></div>
          </div>
          <nav className="menu">
            <div className="menu-branding">
              <div className="portrait"></div>
            </div>
            <ul className="menu-nav">
              <li className="nav-item">
                <Link to="/" className="nav-link">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/work" className="nav-link">
                  Portfolio
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/about" className="nav-link">
                  About Me
                </Link>
              </li>
              <li className="nav-item">
                <Link to="/blog" className="nav-link">
                  Blog
                </Link>
              </li>
            </ul>
          </nav>
        </header>
      </div>
    )
  }
}

export default Navigation
