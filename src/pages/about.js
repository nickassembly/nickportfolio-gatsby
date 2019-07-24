import React from "react"
import Layout from "../components/layout"
import "../js/main.js"

const AboutPage = () => {
  return (
    <Layout>
      <main id="about">
        <h1 className="lg-heading">
          About <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading">Here are a few things about me...</h2>
        <div className="about-info">
          <img
            src="img/profilepic2.jpg"
            alt="Nick Guerra"
            className="bio-image"
          />
          <div className="bio">
            <h3 className="text-secondary">BIO</h3>
            <p>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Ipsa hic
              nobis fuga tempora! Sunt, veritatis voluptate. Dolores sit,
              quisquam aperiam necessitatibus dignissimos similique, placeat
              voluptates praesentium eveniet autem itaque saepe!
            </p>
          </div>

          <div className="job job-1">
            <h3>123 Webshop</h3>
            <h6>Full Stack Developer</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, debitis. Corrupti doloribus libero eius nihil,
              corporis optio nemo molestiae laboriosam!
            </p>
          </div>
          <div className="job job-2">
            <h3>Frontend ABC</h3>
            <h6>FrontEnd</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, debitis. Corrupti doloribus libero eius nihil,
              corporis optio nemo molestiae laboriosam!
            </p>
          </div>
          <div className="job job-3">
            <h3>Backend DEF</h3>
            <h6>SQL DBA</h6>
            <p>
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Laboriosam, debitis. Corrupti doloribus libero eius nihil,
              corporis optio nemo molestiae laboriosam!
            </p>
          </div>
        </div>
      </main>
      <script src="js/main.js"></script>
    </Layout>
  )
}

export default AboutPage
