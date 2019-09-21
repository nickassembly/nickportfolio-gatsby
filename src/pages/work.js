import React from "react"
import Layout from "../components/layout"
import "../scss/main.scss"
import "../css/main.css"
import project1Pic from "../img/projects/peoplefinder.jpg"
import project2Pic from "../img/projects/weightconverter.jpg"
import project3Pic from "../img/projects/weather.jpg"
import project4Pic from "../img/projects/project4.jpg"
import project5Pic from "../img/projects/text2speech.jpg"
import xeniaPic from "../img/projects/xaicon1024.png"

import Head from "../components/head"
import Footer from "../components/footer"

class WorkPage extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="Projects" />
        <main id="work">
          <h1 className="lg-heading">
            My <span className="text-secondary"> Work </span>
          </h1>
          <h2 className="sm-heading"> Below are some of my projects... </h2>
          <div className="projects">
            <div className="item">
              <a href="https://store.steampowered.com/app/944640/Xenias_Ark/">
                <img src={xeniaPic} alt="Projects" />
              </a>
              <a href="http://xeniasark.com" className="btn-light">
                <i className="fas fa-eye"> </i>Xenia's Ark Game Project
              </a>
              <a
                href="https://store.steampowered.com/app/944640/Xenias_Ark/"
                className="btn-dark"
              >
                <i className="fab fa-github"> </i>Available on Steam Workshop
              </a>
            </div>

            <div className="item">
              <a href="https://confident-stonebraker-3fa489.netlify.com/">
                <img src={project1Pic} alt="Projects" />
              </a>
              <a
                href="https://confident-stonebraker-3fa489.netlify.com/"
                className="btn-light"
              >
                <i className="fas fa-eye"> </i>People Finder
              </a>
              <a
                href="https://github.com/nickassembly/PeopleFinder"
                className="btn-dark"
              >
                <i className="fab fa-github"> </i>Github
              </a>
            </div>

            <div className="item">
              <a href="https://wonderful-cray-405df3.netlify.com">
                <img src={project2Pic} alt="Project" />
              </a>
              <a
                href="https://wonderful-cray-405df3.netlify.com"
                className="btn-light"
              >
                <i className="fas fa-eye"> </i>Pound Converter
              </a>
              <a
                href="https://github.com/nickassembly/WeightConverter"
                className="btn-dark"
              >
                <i className="fab fa-github"> </i>Github
              </a>
            </div>

            <div className="item">
              <a href="https://keen-visvesvaraya-bfc1b9.netlify.com/">
                <img src={project3Pic} alt="Projects" />
              </a>
              <a
                href="https://keen-visvesvaraya-bfc1b9.netlify.com/"
                className="btn-light"
              >
                <i className="fas fa-eye"> </i>Current Weather
              </a>
              <a
                href="https://github.com/nickassembly/Weather"
                className="btn-dark"
              >
                <i className="fab fa-github"> </i>Github
              </a>
            </div>

            <div className="item">
              <a href="https://tender-allen-84e71b.netlify.com/">
                <img src={project4Pic} alt="Projects" />
              </a>
              <a
                href="https://tender-allen-84e71b.netlify.com/"
                className="btn-light"
              >
                <i className="fas fa-eye"> </i>Basic React Website
              </a>
              <a
                href="https://github.com/nickassembly/react-website"
                className="btn-dark"
              >
                <i className="fab fa-github"> </i>Github
              </a>
            </div>

            <div className="item">
              <a href="https://condescending-rosalind-63b1e1.netlify.com/">
                <img src={project5Pic} alt="Projects" />
              </a>
              <a
                href="https://condescending-rosalind-63b1e1.netlify.com/"
                className="btn-light"
              >
                <i className="fas fa-eye"> </i>Text To Speech
              </a>
              <a
                href="https://github.com/nickassembly/text2speech"
                className="btn-dark"
              >
                <i className="fab fa-github"> </i>Github
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
