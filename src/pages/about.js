import React from "react"
import Layout from "../components/layout"
import profilepic1 from "../img/profilepic1.jpg"
import Head from '../components/head'

class AboutPage extends React.Component {
  render() {
    return (
      <Layout>
        <Head title="About" />
        <main id="about">
          <h1 className="lg-heading">
            About <span className="text-secondary"> Me</span>
          </h1>
          <h2 className="sm-heading">Here are a few things about me...</h2>
          <div className="about-info">
            <img
              src={profilepic1}
              alt="Nick Guerra"
              className="bio-image"
            />
            <div className="bio">
              <h3 className="text-secondary">BIO</h3>
              <p>
                I am a self taught software developer with a passion for all types of technology. I have always loved solving
                problems, and I believe as a developer that I will never stop learning new ways to do so.
              </p>
            </div>

            <div className="job job-1">
              <h3>Full Stack Developer</h3>
              <h6>.Net and Javascript</h6>
              <p>
                I love to develop full stack applications, that are complete solutions. I
                develop in both .Net and Javascript, but use any tool needed for the job at hand.
              </p>
            </div>
            <div className="job job-2">
              <h3>Game Designer</h3>
              <h6>Unity</h6>
              <p>
                I am part owner and developer at Malicious Games LLC. Our team
                works on developing games for the Unity Engine. Our first title,
                Xenia's Ark is available for early access on the Steam Workshop.
              </p>
            </div>
            <div className="job job-3">
              <h3>Web Development</h3>
              <h6>Guerra Technology</h6>
              <p>
                I develop for the web in various technologies. I build websites for
                my personal projects, and for others. I also build web Apis and
                custom software.
              </p>
            </div>
          </div>
        </main>
      </Layout>
    )
  }
}

export default AboutPage
