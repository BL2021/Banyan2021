import React, { useState } from "react";
import { Navbar, Nav, NavDropdown, Image, Dropdown } from "react-bootstrap";
import Logo from "../styles/images/Logo.png";
import { Link } from "gatsby";


const HeaderNav = (props) => {
  const [isOpen, updateIsOpen] = useState(false);
  const [isOpen2, updateIsOpen2] = useState(false);
  const [expanded, setExpanded] = useState(false);

  return (
    <div>
      <Navbar
        fixed="top"
        bg="light"
        className="zero-dawn text-secondary"
        expand="lg"
        expanded={expanded}
      >
        <Navbar.Brand href="/">
          <Image className="logo" src={Logo} />
        </Navbar.Brand>
        <Navbar.Toggle
          onClick={() => setExpanded(expanded ? false : "expanded")}
          aria-controls="responsive-navbar-nav"
        />
        <Navbar.Collapse id="responsive-navbar-nav">
          <Nav className="mr-auto"></Nav>
          <Nav className="d-flex align-items-end">
            <Nav.Link onClick={() => setExpanded(false)} as={Link} to="/">
              Home
            </Nav.Link>
            <NavDropdown
              className="mx-2 d-flex flex-column align-items-end"
              as="div"
              title="Who We Are"
              id="basic-dropdown1"
              {...props}
              onMouseOver={() => updateIsOpen2(true)}
              onMouseLeave={() => updateIsOpen2(false)}
              show={isOpen2}
            >
              <NavDropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen2(false);
                }}
                as={Link}
                to="/About"
              >
                About
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen2(false);
                }}
                as={Link}
                to="/Mission"
              >
                Mission
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen2(false);
                }}
                as={Link}
                to="/Team"
              >
                Team
              </NavDropdown.Item>
              <NavDropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen2(false);
                }}
                as={Link}
                to="/Partners"
              >
                Partners
              </NavDropdown.Item>
            </NavDropdown>
            <NavDropdown
              className="mx-2 d-flex flex-column align-items-end"
              as="div"
              title="What We Do"
              id="basic-dropdown2"
              {...props}
              onMouseOver={() => updateIsOpen(true)}
              onMouseLeave={() => updateIsOpen(false)}
              show={isOpen}
            >
              <Dropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen(false);
                }}
                as={Link}
                to="/Services/our_process"
              >
                Our Process
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen(false);
                }}
                as={Link}
                to="/Services/web_apps"
              >
                Web Apps
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen(false);
                }}
                as={Link}
                to="/Services/mobile_apps"
              >
                Mobile Apps
              </Dropdown.Item>
              <Dropdown.Item
                onClick={() => {
                  setExpanded(false);
                  updateIsOpen(false);
                }}
                as={Link}
                to="/Services/quality_assurance"
              >
                Quality Assurance
              </Dropdown.Item>
            </NavDropdown>
            <Nav.Link
              className="mx-2 mr-lg-5"
              href="#contact_us"
              onClick={() => setExpanded(false)}
            >
              Contact
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Navbar>
    </div>
  );
};
export default HeaderNav;
