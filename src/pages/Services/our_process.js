import React, { Component } from "react"
import Service from "../../components/Services"
import "./serve.css"
import Diagram from "../../styles/images/ourprocess.png"
import ContactForm from "../../components/Form"
import MainLayout from "../../components/Layout/MainLayout"
export class our_process extends Component {
  render() {
    return (
      <MainLayout>
        <Service
          img="https://wishdesk.com/sites/default/files/inline-images/Traditional%20Web%20Development%20Process.jpg"
          title="Our Process"
          diagram={Diagram}
          h1="From your initial conversations with our business development team, through detailed requirements discussions with Banyan’s Labs product and project management, to regular demonstrations of working product iterations where your feedback is integrated, the client’s voice, YOUR voice, is paramount."
          h2="We want to thoroughly understand and deliver your value proposition. The problem Banyan Labs hopes to solve is whatever problem you are solving for your customers. Our questions will include:
              "
          ul
          h3="Talk with us about how Banyan Labs can affordably and expertly partner with you in your success."
        />
        <br />
        <ContactForm />
      </MainLayout>
    )
  }
}

export default our_process
