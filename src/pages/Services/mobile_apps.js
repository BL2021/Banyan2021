import React, { Component } from "react"
import Service from "../../components/Services"
import "./serve.css"
import native from "../../styles/images/rnative.png"
import ContactForm from "../../components/Form"
import MainLayout from "../../components/Layout/MainLayout"
export class mobile_apps extends Component {
  render() {
    return (
      <MainLayout>
        <Service
          diagram={native}
          img="https://www.ipraxa.com/blog/wp-content/uploads/2018/09/mobile-app-development-technologies.png"
          title="Mobile Applications"
          mobile
          h2="We work with popular mobile application frameworks to efficiently make your mobile app ideas happen."
        />

        <br />
        <ContactForm />
      </MainLayout>
    )
  }
}

export default mobile_apps
