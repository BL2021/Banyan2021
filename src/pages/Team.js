import React, { Component } from "react"
import { Row, Container } from "react-bootstrap"
import TeamMember from "../components/TeamMember/TeamMember"
import { TEAMMEMBERS } from "../data/teamMembers"
import ReactGA from "react-ga"
import HeaderNav from "../components/HeaderNav"
import ContactForm from "../components/Form"
export default class Team extends Component {
  componentDidMount() {
    window.scrollTo(0, 0)
    ReactGA.initialize("UA-169087465-1")
    ReactGA.pageview("/team")
  }
  render() {
    return (
      <div>
        <HeaderNav />
        <Row
          style={{
            backgroundColor: "#24234d",
            color: "white",
            marginTop: "70px",
          }}
        >
          <Container className="text-center">
            <h1 className="display-3 text-justify text-center p-3">Team</h1>
          </Container>
        </Row>

        <Row className="mt-2">
          <Container>
            <TeamMember teamMembers={TEAMMEMBERS} />
          </Container>
        </Row>
        <ContactForm />
      </div>
    )
  }
}
