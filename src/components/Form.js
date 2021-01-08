import React, { useState } from "react";
import { Form, Button, Col } from "react-bootstrap";
import * as emailjs from "emailjs-com";

const ContactForm = (props) => {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");

  const onSubmit = (event) => {
    event.preventDefault();
    let templateParams = {
      from_email: email,
      to_name: "contact@banyanlabs.io",
      from_name: name,
      number: phone,
      message_html: message,
    };
    emailjs
      .send("gmail", "banyantest", templateParams, "user_4my3il3TVE5QvTZ2QqykP")
      .then((res) => {
        setName("");
        setEmail("");
        setPhone("");
        setMessage("");
        alert("You message was sent successfully!");
      })
      .catch((e) => alert("Message was not properly sent. Please try again."));
  };
  return (
    <div id="contact_us" className="outterMainDiv w-100">
      <div className="p-4 innerMainDiv col-9">
        <div className="row justify-content-center">
          <h2 className="row justify-content-center mt-3 ml-5 mr-5 mb-5 p-3 getInTouch">
            Get in Touch
          </h2>
        </div>
        <Form onSubmit={onSubmit}>
          <Form.Group controlId="formGridName">
            <Form.Label className="text-white">Name:</Form.Label>
            <Form.Control
              placeholder="Enter Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />
          </Form.Group>
          <Form.Row>
            <Form.Group as={Col} controlId="formGridEmail">
              <Form.Label className="text-white">Email:</Form.Label>
              <Form.Control
                type="email"
                placeholder="Enter email"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                required
              />
            </Form.Group>
          </Form.Row>
          <Form.Group controlId="formGridPhone">
            <Form.Label className="text-white">Phone:</Form.Label>
            <Form.Control
              placeholder="Enter Phone Number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </Form.Group>
          <Form.Row>
            <Form.Group controlId="exampleForm.ControlTextarea1">
              <Form.Label className="text-white">
                Additional message:
              </Form.Label>
              <Form.Control
                className="w-100"
                cols="140"
                as="textarea"
                rows="5"
                placeholder="Add a brief message"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
              />
            </Form.Group>
          </Form.Row>
          <Button className="submit_color lead" type="submit">
            Submit
          </Button>
        </Form>
      </div>
    </div>
  );
};
export default ContactForm;
