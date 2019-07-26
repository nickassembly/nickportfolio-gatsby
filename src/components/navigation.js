import React from "react"
import { Link } from "gatsby"
import "../scss/main.scss"

const Navigation = () => {
  return (
    <div>
      <header>
        <div className="menu-btn">
          <div className="btn-line"></div>
          <div className="btn-line"></div>
          <div className="btn-line"></div>
        </div>
        <nav className="menu">
          <div className="menu-branding">
            <div className="portrait"></div>
          </div>
          <ul className="menu-nav">
            <li className="nav-item current">
              <Link to="/" className="nav-link">
                Home
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/about" className="nav-link">
                About Me
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/work" className="nav-link">
                Portfolio
              </Link>
            </li>
            <li className="nav-item">
              <Link to="/contact" className="nav-link">
                Contact Me
              </Link>
            </li>
          </ul>
        </nav>
      </header>
    </div>
  )
}

export default Navigation
