import React, { Component } from "react";
import { Container, Row, Col, Image } from "react-bootstrap";
import NaicoTeam from "../styles/images/naicoteam.jpg";
import PersevereTeam from "../styles/images/persevere_group_photo.jpg";
import ReactGA from 'react-ga';
import HeaderNav from "../components/HeaderNav";
import ContactForm from "../components/Form"
export default class Partners extends Component {
  componentDidMount() {
    window.scrollTo(0, 0);
    ReactGA.initialize('UA-169087465-1')
    ReactGA.pageview("/partners"); 
  }
  render() {
    return (
      <div
        style={{
          color: "white",
          fontSize: "22px",
          marginTop: "70px",
        }}
        className="lead"
      >
            <HeaderNav />
        <Row style={{ backgroundColor: "#24234d" }}>
          <Container className="pt-4 pb-4 text-center">
            <h1 className="display-3">Our Partners</h1>
          </Container>
        </Row>
        <Row>
          <Container className="pt-4 pb-4 " style={{ color: "black" }}>
            <div>
              <Image className="mt-2 mb-4" src={NaicoTeam} fluid />
            </div>
            <Row>
              <Col lg={3}>
                <Image src="./Pictures/naico-logo.jpg" fluid />
              </Col>
              <Col lg={9}>
                <p>
                  Naico is a premier IT solutions partner which provides depth,
                  breadth, and mentorship to our Banyan Labs team. In business
                  since 2005, Naico’s rich pool of talent provides senior
                  architects and engineers that mentor and code to help us
                  handle any job, large or small.
                </p>
              </Col>
            </Row>
            <div>
              <Image
                className="mt-5 mb-4"
                src={PersevereTeam}
                fluid
                style={{ maxHeight: "750px" }}
              />
            </div>
            <Row>
              <Col lg={3}>
                <Image src="./Pictures/persevere-logo.svg" fluid />
              </Col>
              <Col lg={9}>
                <p>
                  Persevere is a national non-profit organization whose mission
                  is to empower justice-involved men and women and individuals
                  at risk for justice involvement to succeed as productive
                  members of society. We do this by helping them develop the
                  skills they need to be employable within the technology
                  industry, either as employees or entrepreneurs, and helping
                  them find jobs in the field. Peresevere’s goal, since 2012, is
                  to change lives through education, mentoring, and ongoing
                  support. Persevere provides a coding education program that
                  teaches justice-involved individuals how to code. Banyan Labs
                  hires these full-stack developer graduates and teaches them
                  how to succeed on teams.
                </p>
              </Col>
            </Row>
          </Container>
        </Row>
        <ContactForm />
      </div>
    );
  }
}
