import React from "react"

import { Row, Container } from "react-bootstrap"
import TeamMember2 from "../../components/TeamMember/TeamMember2"
import { TEAMMEMBERS } from "../../data/teamMembers"

import ContactForm from "../../components/Form"
import MainLayout from "../../components/Layout/MainLayout"

const Team = () => {
  return (
    <MainLayout>
      <Row
        style={{
          backgroundColor: "#24234d",
          color: "white",
          marginTop: "70px",
        }}
      >
        <Container className="text-center">
          <h1 className="display-3 text-justify text-center p-4">Team</h1>
        </Container>
      </Row>

      <Row className="mt-2">
        <Container>
          {/* GraphQL Query for Contentful */}
          <TeamMember2 teamMembers={TEAMMEMBERS} />
        </Container>
      </Row>
      <ContactForm />
    </MainLayout>
  )
}
export default Team
