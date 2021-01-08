import React, { useState, useEffect } from "react";
import { Container, Row, Table } from "react-bootstrap";
import "./style.css";
import CheckIcon from "@material-ui/icons/Check";
import ReactGA from 'react-ga';

function Service(props) {

    ReactGA.initialize('UA-169087465-1')
    ReactGA.pageview(props.url);
  

  return (
    <div>
      <Row style={{ backgroundColor: "#24234d" }}>
        <Container className="pt-4 pb-4 lead text-center text-light">
          <h1 className="display-4">{props.title}</h1>
        </Container>
      </Row>

      <div
        id="features"
        className="d-flex flex-column justify-content-center align-items-center"
      >
        {props.diagram && (
          <div className="row justify-content-center mt-4 mb-3">
            <img
              src={props.diagram}
              alt="img"
              className="px-5 col-md-9 col-sm-12 mx-auto max-hw"
            />
          </div>
        )}
        {props.mobile && (
          <Table
            style={{ maxWidth: "400px" }}
            className="mt-4 mx-auto"
            borderless
          >
            <tbody>
              <tr>
                <td>
                  <h4>iOS?</h4>
                </td>
                <td className="row justify-content-center">
                  <CheckIcon className="ml-3" style={{ fontSize: "28" }} />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Android?</h4>
                </td>
                <td className="row justify-content-center">
                  <CheckIcon className="ml-3" style={{ fontSize: "28" }} />
                </td>
              </tr>
              <tr>
                <td>
                  <h4>Cross-platform solutions?</h4>
                </td>
                <td className="row justify-content-center">
                  <CheckIcon className="ml-3" style={{ fontSize: "28" }} />
                </td>
              </tr>
              <tr>
                <td colSpan="2" className="text-center">
                  <h3>Yeah, we can do that</h3>
                </td>
              </tr>
            </tbody>
          </Table>
        )}

        <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
          <p className="mt-3 lead text-justify">{props.h1}</p>
          <br />
          <p className="mt-3 lead text-justify">{props.h2}</p>
        </div>
        {props.ul && (
          <div className="mt-3">
            <ul>
              <li>
                <h4 className="lead">Who are our personas?</h4>
              </li>
              <li>
                <h4 className="lead">
                  What are their pain points, wants, and needs?
                </h4>
              </li>
              <li>
                <h4 className="lead">
                  What problems are we trying to solve for them?
                </h4>
              </li>
              <li>
                <h4 className="lead">What value are we providing?</h4>
              </li>
              <li>
                <h4 className="lead">
                  What user experience flows are we implementing?
                </h4>
              </li>
            </ul>
          </div>
        )}
        {props.diagram2 && (
          <div className="row justify-content-center mb-3">
            <img
              src={props.diagram2}
              alt="img"
              className="px-5 col-md-9 col-sm-12 mx-auto max-hw"
            />
          </div>
        )}
        <div className="col-md-9 col-sm-12 row justify-content-center mt-3">
          <h3 className="mt-3 lead text-justify">{props.h3}</h3>
        </div>
      </div>

      <br />
    </div>
  );
}
export default Service;
