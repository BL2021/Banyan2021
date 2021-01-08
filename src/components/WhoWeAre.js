import React from "react";
import PLogo from "../styles/images/persLogo.png";
import NLogo from "../styles/images/naico.jpg";
import { Link } from "gatsby";
import Team from "../styles/images/banyanGroup.jpg";
import { Figure } from "react-bootstrap";

export default function WhoWeAre() {
  return (
    <div>
      <div className="row justify-content-center p-5">
        <div className="text-center col-12">
          <Link className="no-dec " to="/about_us">
            <h3 className="display-4 prim-txt">Who We Are</h3>
          </Link>
        </div>

        <div style={{ maxwidth: "1200px" }} className="text-center">
          <Link className="no-dec" to="/about_us">
            <h3 className="header-size-2 pt-5 sec-txt">About</h3>
          </Link>
          <p className="lead py-3" style={{ fontSize: "24px" }}>
            We are a collection of people dedicated to delivering the highest
            quality service to our customers while impacting social change.
            Everything at Banyan Labs begins and ends with technology: We
            provide the best in end-to-end product development, quality
            assurance, and engineering solutions to help our customers reach
            their development and business goals. But we’re more than what we do
            for the market, we measure ourselves by what we do for PEOPLE. Our
            vision is to empower justice-involved men and women to succeed in
            software development careers by providing service, experience, and
            opportunities at every turn.
          </p>
          <Link className="no-dec" to="/mission">
            <h3 className="header-size-2 sec-txt pt-2">Mission</h3>
          </Link>
          <p className="lead py-3" style={{ fontSize: "24px" }}>
            Client value. Associate growth.
          </p>
        </div>
        <div>
          <Link className="no-dec" to="/team">
            <h3 className="text-center display-4 prim-txt py-5">Team</h3>
          </Link>
          <Figure style={{ maxwidth: "1200px" }}>
            <Figure.Image height={350} maxwidth={750} src={Team} />
            <Figure.Caption
              style={{ fontSize: "20px" }}
              className="text-center"
            >
              “The strength of the team is each individual member. The strength
              of each member is the team.” — Phil Jackson
            </Figure.Caption>
          </Figure>
        </div>
        <div className="col-12 text-center mt-3">
          <Link className="no-dec" to="/partners">
            <h3 className="display-4 prim-txt mb-3 py-5">Partners</h3>
          </Link>
          <Figure>
            <Figure.Image
              minwidth={300}
              height={110}
              maxwidth={500}
              src={PLogo}
            />
            <Figure.Caption
              style={{ maxwidth: "1200px", fontSize: "24px" }}
              className="fig-cap"
            >
              Persevere is a national non-profit organization who shares our
              mission to empower justice-involved men and women to succeed as
              productive members of society. By helping them develop the skills
              they need to be employable within the technology industry, and
              helping them find jobs in the field, they are changing lives
              through education, mentoring, and ongoing support. Persevere
              provides a coding education program that teaches inmates and
              parolees how to code. Banyan Labs hires these full-stack developer
              graduates and teaches them how to succeed on teams.
            </Figure.Caption>
          </Figure>
          <Figure>
            <Figure.Image src={NLogo} />
            <Figure.Caption className="fig-cap" style={{ fontSize: "24px" }}>
              Naico is a premier IT solutions partner which provides depth,
              breadth, and mentorship to our Banyan Labs team.
            </Figure.Caption>
          </Figure>
        </div>
      </div>
    </div>
  );
}
