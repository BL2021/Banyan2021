import React from "react";
import { Image, Modal } from "react-bootstrap";

export default function TeamMemberExpanded(props) {
  if (props.member !== null) {
    return (
      <>
        <Modal show={props.show} onHide={props.onClose}>
          <Modal.Header closeButton>
            <Modal.Title>
              {props.member.name} - {props.member.title}
            </Modal.Title>
          </Modal.Header>
          <Modal.Body
            style={{
              whiteSpace: "pre-line",
              textAlign: "justify",
              fontSize: "22px",
            }}
          >
            <Image
              src={props.member.image}
              fluid
              rounded
              style={{
                maxHeight: "300px",
                display: "block",
                marginLeft: "auto",
                marginRight: "auto",
              }}
            />
            <br />
            {props.member.bio}
          </Modal.Body>
        </Modal>
      </>
    );
  } else {
    return <></>;
  }
}
