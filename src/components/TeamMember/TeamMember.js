import React, { Component } from "react";
import TeamMemberExpanded from "../TeamMemberExpanded";
import { Card, Row, CardDeck, Col } from "react-bootstrap";
import { graphql } from "gatsby"
import "./styles.css";
export default class TeamMember extends Component {
  constructor(props) {
    super(props);
    this.handleShow = this.handleShow.bind(this);
    this.handleClose = this.handleClose.bind(this);
    this.state = {
      selectedMember: null,
      show: false,
    };
  }
  learnMore(member) {
    this.setState({ selectedMember: member });
  }
  handleClose() {
    this.setState({ show: false });
  }
  handleShow() {
    this.setState({ show: true });
  }
  render() {
    const query = graphql`
    {
      allContentfulTheTeam {
        nodes {
          id
          name
          photo {
            resolutions {
              src
            }
          }
          title
          bio {
            bio
          }
        }
      }
    }
  `
Collapse
    console.log(query);
    const members = this.props.teamMembers.map((member) => {
      return (
        <Col sm={12} md={6} lg={3} key={member.id}>
          <Card
            className="m-2"
            onClick={() => {
              this.learnMore(member);
              this.handleShow();
            }}
            style={{ cursor: "pointer" }}
          >
            <Card.Body style={{ border: "#24234D solid 3px" }}>
              <Card.Img
                variant="top"
                src={member.image}
                className="cardImage"
              />
              <Card.Title
                style={{ textDecorationColor: "#494D83", fontSize: "1.35em" }}
              >
                {member.name}
              </Card.Title>
              <Card.Subtitle>
                <b>{member.title}</b>
              </Card.Subtitle>
              <br />
            </Card.Body>
          </Card>
        </Col>
      );
    });
    return (
      <div className="container">
        <Row className="mb-2">
          <CardDeck>{members}</CardDeck>
          <TeamMemberExpanded
            member={this.state.selectedMember}
            show={this.state.show}
            onClose={this.handleClose}
          />
        </Row>
      </div>
    );
  }
}