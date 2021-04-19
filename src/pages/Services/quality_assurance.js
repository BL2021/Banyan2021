import React, { Component } from "react"
import Service from "../../components/Services"
import "./serve.css"
import ContactForm from "../../components/Form"
import MainLayout from "../../components/Layout/MainLayout"
export class quality_assurance extends Component {
  render() {
    return (
      <MainLayout>
        <Service
          img="https://i0.wp.com/opensourceforu.com/wp-content/uploads/2019/04/Testing-mobile-and-apps.jpg?fit=900%2C535&ssl=1"
          title="Quality Assurance"
          h1="Say what you do. Do what you say. Prove it. Improve it."
          h2="Minimizing your risks is part of our process whether it’s manual performance testing or automated functional testing."
        />

        <br />
        <ContactForm />
      </MainLayout>
    )
  }
}

export default quality_assurance
