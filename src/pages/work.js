import React from "react"
import Layout from "../components/layout"

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
                <img src="img/projects/project1.jpg" alt="Project" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github{" "}
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src="img/projects/project2.jpg" alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github{" "}
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src="img/projects/project3.jpg" alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github{" "}
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src="img/projects/project4.jpg" alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github{" "}
              </a>
            </div>

            <div className="item">
              <a href="#!">
                <img src="img/projects/project5.jpg" alt="Projects" />
              </a>
              <a href="#" className="btn-light">
                <i className="fas fa-eye"></i>Project{" "}
              </a>
              <a href="#" className="btn-dark">
                <i className="fab fa-github"></i>Github{" "}
              </a>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default WorkPage
