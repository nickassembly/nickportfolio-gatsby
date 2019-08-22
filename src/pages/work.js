import React from "react"
import Layout from "../components/layout"
import "../scss/main.scss"
import "../css/main.css"
import project1Pic from "../img/projects/project1.jpg"
import project2Pic from "../img/projects/project2.jpg"
import project3Pic from "../img/projects/project3.jpg"
import project4Pic from "../img/projects/project4.jpg"


import Head from '../components/head'
import Footer from '../components/footer'

class WorkPage extends React.Component {
  render() {

    return (
      <Layout>
        <Head title="Projects" />
        <main id="work">
          <h1 className="lg-heading">
            My <span className="text-secondary"> Work</span>
          </h1>
          <h2 className="sm-heading">Below are some of my projects...</h2>

          <div className="projects">

            <div className="item">
              <a href="https://confident-stonebraker-3fa489.netlify.com/">
                <img src={project1Pic} alt="Projects" />
              </a>
              <a href="https://confident-stonebraker-3fa489.netlify.com/" className="btn-light">
                <i className="fas fa-eye"></i>People Finder
              </a>
              <a href="https://github.com/nickassembly/PeopleFinder" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

            <div className="item">
              <a href="https://github.com/nickassembly/ShoppingList">
                <img src={project2Pic} alt="Project" />
              </a>
              <a href="https://github.com/nickassembly/ShoppingList" className="btn-light">
                <i className="fas fa-eye"></i>Shopping List
              </a>
              <a href="https://github.com/nickassembly/ShoppingList" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

            <div className="item">
              <a href="https://github.com/nickassembly/Weather">
                <img src={project3Pic} alt="Projects" />
              </a>
              <a href="https://github.com/nickassembly/Weather" className="btn-light">
                <i className="fas fa-eye"></i>Current Weather
              </a>
              <a href="https://github.com/nickassembly/Weather" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

            <div className="item">
              <a href="https://github.com/nickassembly/react-website">
                <img src={project4Pic} alt="Projects" />
              </a>
              <a href="https://github.com/nickassembly/react-website" className="btn-light">
                <i className="fas fa-eye"></i>Basic React Website
              </a>
              <a href="https://github.com/nickassembly/react-website" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

          </div>
        </main>
        <Footer />
      </Layout>
    )
  }
}

export default WorkPage
