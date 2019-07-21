import React from "react"

const WorkPage = () => {
  return (
    <div>
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
          <script src="js/main.js"></script>
        </div>
      </main>
      <footer id="main-footer">Copyright &copy; 2019</footer>
    </div>
  )
}

export default WorkPage
