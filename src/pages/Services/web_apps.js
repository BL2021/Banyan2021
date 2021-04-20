import React, { Component } from "react"
import Service from "../../components/Services"
import "./serve.css"
import Diagram2 from "../../styles/images/new_junt.jpg"
import ContactForm from "../../components/Form"
import MainLayout from "../../components/Layout/MainLayout"
export class web_apps extends Component {
  render() {
    return (
      <MainLayout>
        <Service
          img="https://fiverr-res.cloudinary.com/images/t_main1,q_auto,f_auto,q_auto,f_auto/gigs/121002887/original/9f2174ec1236e128859a8ad2ff98a5a21a0230b7/sdwdwdwwqwfhijwwfwefh-eif-wehfiwehf-i-hwei.jpg"
          title="Web Applications"
          h1="Front end, back end, and design. Let us help you make your best impression online."
          diagram2={Diagram2}
          h3="A high-level architecture diagram of some technologies we can use to implement your website."
        />

        <br />
        <ContactForm />
      </MainLayout>
    )
  }
}

export default web_apps
