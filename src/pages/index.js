import React from "react"
import Layout from "../components/layout"
import "../scss/main.scss"

// TODO: Issue with footer getting backgroundStyle and being darkened with body portion

class IndexPage extends React.Component {
  render() {
    var backgroundStyle = {
      opacity: 0.9,
    }
    return (
      <Layout>
        <link
          rel="stylesheet"
          href="https://use.fontawesome.com/releases/v5.9.0/css/all.css"
          integrity="sha384-i1LQnF23gykqWXg6jxC2ZbCbUMxyw5gLZY6UiUS98LYV5unm8GWmfkIS6jqJfb4E"
          crossOrigin="anonymous"
        />
        <body id="bg-img" style={backgroundStyle}>
          <main id="home" >
            <h1 className="lg-heading">
              Nick <span className="text-secondary"> Guerra</span>
            </h1>
            <h2 className="sm-heading">Software Developer</h2>
            <div className="icons">
              <a href="https://twitter.com/nickassembly">
                <i className="fab fa-twitter fa-2x"></i>
              </a>
              <a href="https://www.facebook.com/profile.php?id=100009286184023">
                <i className="fab fa-facebook fa-2x"></i>
              </a>
              <a href="https://www.linkedin.com/in/nick-guerra-9ba557144/">
                <i className="fab fa-linkedin fa-2x"></i>
              </a>
              <a href="https://github.com/nickassembly">
                <i className="fab fa-github fa-2x"></i>
              </a>
            </div>
          </main>
        </body>
      </Layout>
    )
  }
}

export default IndexPage
