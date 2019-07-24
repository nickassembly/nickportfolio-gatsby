import React from "react"
import Layout from "../components/layout"
import "../js/main.js"

const ContactPage = () => {
  return (
    <Layout>
      <main id="contact">
        <h1 className="lg-heading">
          Contact <span className="text-secondary"> Me</span>
        </h1>
        <h2 className="sm-heading">How you can reach me...</h2>

        <div className="boxes">
          <div>
            <span className="text-secondary">Email: </span>
            Nickg@maliciousgames.com
          </div>
          <div>
            <span className="text-secondary">Phone: </span>(225)290-2080
          </div>
          <div>
            <span className="text-secondary">Address: </span>908 East Chuck St.
            Gonzales, LA 70737
          </div>
        </div>
      </main>

      <script src="js/main.js"></script>
    </Layout>
  )
}

export default ContactPage
