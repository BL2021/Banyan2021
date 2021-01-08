import React, { Component } from "react"
import { Container, Row, Table, Figure } from "react-bootstrap"
import Divider from "@material-ui/core/Divider"
import AboutUsPic from "../styles/images/persevere_group.jpg"
import "./about.css"
import ReactGA from "react-ga"
import ContactForm from "../components/Form"
import HeaderNav from "../components/HeaderNav"

export default class About extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    ReactGA.initialize("UA-169087465-1")
    ReactGA.pageview("/about_us")
  }

  render() {
    return (
      <div
        style={{
          color: "white",
          fontSize: "22px",
          marginTop: "70px",
        }}
      >
        <HeaderNav />
        <Row
          className="justify-content-center"
          style={{ backgroundColor: "#24234d" }}
        >
          <Container className=" pt-4 pb-4 text-center">
            <h1 className="display-3 pl-3">About Us</h1>
          </Container>
        </Row>
        <Row className="justify-content-center">
          <Figure className="mx-auto" style={{ maxWidth: "1200px" }}>
            <Figure.Image src={AboutUsPic} style={{ maxHeight: "600px" }} />
          </Figure>
        </Row>
        <Row>
          <Container
            className="py-4 text-center col-sm-12 col-md-10 col-lg-6"
            style={{ color: "black" }}
          >
            <Container className="lead text-justify">
              <Divider style={{ height: "2px" }} className="mb-4" />
              <p>
                Banyan Labs is a technology development company with a powerful
                social impact story. We provide quality web and mobile app
                creation, front and back end software development, quality
                assurance testing, and other software engineering services. We
                provide end-to-end product development, quality assurance,
                product and solution engineering services to assist customers in
                achieving their product development and business goals. Our
                vision is to empower men and women with skill sets that create a
                lifetime of new opportunities.
              </p>
              <p>
                In the United State, we face a serious problem with recidivism
                rates upwards of 70% (National Institute of Justice). Persevere,
                a national non-profit and Banyan Labs partner, is solving this
                problem as an education and training program to help with
                reintegration skills.
              </p>
              <p>
                Banyan Labs was created out of the need to place Persevere
                graduates into jobs through an on-the-job training program.
                Persevere teaches justice-involved individuals how to code and
                certifies them with six industry-recognized certifications,
                including Full Stack Developer. Banyan Labs hires these
                technology graduates, offering them mentoring from experienced
                technology partners, and teaching them how to excel on
                cross-functional development teams.
              </p>
              <p>
                Working with Banyan Labs provides your business with innovative
                tech solutions and opportunities to make lasting, positive
                social change. Our work is proven, professional, and affordable.
                We’d love to talk with you about your next project.
              </p>
              <Divider style={{ height: "2px" }} />
            </Container>

            <Container className="py-4 mt-3 lead">
              <Table bordered>
                <tbody style={{ backgroundColor: "#24234d", color: "white" }}>
                  <tr>
                    <td>Web App Development</td>
                    <td>
                      Custom app and database development, hosting, support, and
                      maintenance
                    </td>
                  </tr>
                </tbody>

                <tbody style={{ backgroundColor: "#1b723f", color: "white" }}>
                  <tr>
                    <td>Mobile App Development</td>
                    <td>
                      iOS and Android native apps available through the app
                      stores
                    </td>
                  </tr>
                </tbody>
                <tbody style={{ backgroundColor: "#511135", color: "white" }}>
                  <tr>
                    <td>Quality Assurance</td>
                    <td>
                      End-to-end testing, manual and automated testing, and
                      continuous integration
                    </td>
                  </tr>
                </tbody>
              </Table>
              <Divider style={{ height: "2px", marginTop: "40px" }} />
            </Container>
            <Container className="mt-2 lead text-justify">
              <p>
                Banyan Labs is co-located with Persevere’s Technology Institute
                in Tennessee to facilitate collaboration and efficiency. We are
                expected to have locations in Arizona and other states as both
                companies expand.
              </p>
            </Container>
          </Container>
        </Row>
        <ContactForm />
      </div>
    )
  }
}
