import React from "react"
import "../scss/main.scss"
import "../js/main.js"

const Navigation = () => {
  return (
    <div>
      <header>
        <div class="menu-btn">
          <div class="btn-line"></div>
          <div class="btn-line"></div>
          <div class="btn-line"></div>
        </div>
        <nav class="menu">
          <div class="menu-branding">
            <div class="portrait"></div>
          </div>
          <ul class="menu-nav">
            <li class="nav-item current">
              <a href="/" class="nav-link">
                Home
              </a>
            </li>
            <li class="nav-item">
              <a href="/about" class="nav-link">
                About Me
              </a>
            </li>
            <li class="nav-item">
              <a href="/work" class="nav-link">
                Portfolio
              </a>
            </li>
            <li class="nav-item">
              <a href="/contact" class="nav-link">
                Contact Me
              </a>
            </li>
          </ul>
        </nav>
      </header>
      <script src="js/main.js"></script>
    </div>
  )
}

export default Navigation
