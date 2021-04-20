import React, { Component } from "react"
import Carousel from "../components/Carousel"
import WhatWeDo from "../components/WhatWeDo"
import WhoWeAre from "../components/WhoWeAre"
import Information from "../components/Information"
import ContactForm from "../components/Form"
import ReactGA from "react-ga"
import MainLayout from "../components/Layout/MainLayout"

export default class Home extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    ReactGA.initialize("UA-169087465-1")
    ReactGA.pageview("/")
  }

  render() {
    return (
      <MainLayout>
        <Carousel />
        <div className="container-fluid n-p p-0">
          <WhoWeAre />
          <WhatWeDo />
        </div>
        <div className="container-fluid n-p p-0">
          <Information />
        </div>
        <ContactForm />
      </MainLayout>
    )
  }
}
