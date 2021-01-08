import React, { Component, useState } from "react";
import TeamMemberExpanded from "../TeamMemberExpanded";
import { Card, Row, CardDeck, Col } from "react-bootstrap";
import { useStaticQuery, graphql } from "gatsby"
import "./styles.css";

const TeamMember2 = (props) => {




    const [selectedMember, setMember] = useState(null);
    const [show, setShow] = useState(false);

    const data = useStaticQuery(graphql`
    {
      allContentfulTeamMember {
        edges {
          node {
            bio {
              bio
            }
            image {
              fixed {
                src
              }
            }
              title
         
            name
          }
        }
      }
    }
  `)
          

   const learnMore = (member) => {
    setMember(member)
    console.log(selectedMember);
    return selectedMember;
  }

  const handleClose = () =>  {
    setShow(false)
  }

 const handleShow = () =>  {
    setShow(true)
   
  }


    const members = data.allContentfulTeamMember.edges.map((member) => {
      return (
        <Col sm={12} md={6} lg={3} key={member.id}>
          <Card
            className="m-2"
            onClick={() => {
              learnMore(member);
              handleShow();
            }}
            style={{ cursor: "pointer" }}
          >
            <Card.Body style={{ border: "#24234d solid 3px" }}>
              <Card.Img
                variant="top"
                src={member.node.image.fixed.src}
                className="cardImage"
              />
              <Card.Title
                style={{ textDecorationColor: "#494d83", fontSize: "1.35em" }}
              >
                {member.node.name}
              </Card.Title>
              <Card.Subtitle>
                <b>{member.node.title}</b>
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
            member={selectedMember}
            show={show}
            onClose={handleClose}
          />
        </Row>
      </div>
    );
  }

  export default TeamMember2;