import React from "react"
import "../scss/main.scss"

const IndexPage = () => {
  return (
    <div>
      <link
        rel="stylesheet"
        href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
        integrity="sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E"
        crossOrigin="anonymous"
      />

      <body id="bg-img">
        <main id="home">
          <h1 className="lg-heading">
            Nick <span className="text-secondary"> Guerra</span>
          </h1>
          <h2 className="sm-heading">Software Developer</h2>
          <div className="icons">
            <a href="#">
              <i className="fab fa-twitter fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-facebook fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-linkedin fa-2x"></i>
            </a>
            <a href="#">
              <i className="fab fa-github fa-2x"></i>
            </a>
          </div>
        </main>
        <script src="../js/main.js"></script>
      </body>
    </div>
  )
}

export default IndexPage
