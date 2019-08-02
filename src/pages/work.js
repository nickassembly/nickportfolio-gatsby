import React from "react"
import Layout from "../components/layout"
import "../scss/main.scss"
import "../css/main.css"
import project1Pic from "../img/projects/project1.jpg"
import project2Pic from "../img/projects/project2.jpg"
import project3Pic from "../img/projects/project3.jpg"
import project4Pic from "../img/projects/project4.jpg"
import project5Pic from "../img/projects/project5.jpg"

class WorkPage extends React.Component {
  render() {
    return (
      <Layout>
        <main id="work">
          <h1 className="lg-heading">
            My <span className="text-secondary"> Work</span>
          </h1>
          <h2 className="sm-heading">Below are some of my projects...</h2>

          <div className="projects">
            <div className="item">
              <a href="#!">
                <img src={project1Pic} alt="Project" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src={project2Pic} alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src={project3Pic} alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src={project4Pic} alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src={project5Pic} alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github
              </a>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default WorkPage
