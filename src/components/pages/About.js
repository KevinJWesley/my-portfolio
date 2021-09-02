import React from "react";
import "./styles/About.css";
import { Container, Row } from "react-bootstrap";

// ADD VISUAL REPRESENTATION OF SKILLS: JAVASCRIPT, REACT, ETC..
// ADD EMAIL TO LANDING PAGE

function About() {
  return (
    <>
      <Container className="aboutContainer">
        <Row xs={1}>
          <h1 className="aboutTitle">About Me</h1>
        </Row>

        <Row>
          <div className="aboutText">
            <p>
              My name is Kevin J Wesley.
              <br></br>I am a full stack web developer. Interested in design,
              music and technology.<br></br>
              <br></br>Frontend: HTML5, CSS, Javascript, Bootstrap, AJAX
              <br></br>Backend: MySQL, MongoDB, Express, ReactJS, Node,
              Handlebars, GraphQL<br></br>
              <br></br>Email:{" "}
              <a href="mailto: kevin.john.wesley@gmail.com">
                kevin.john.wesley@gmail.com
              </a>
            </p>
          </div>
        </Row>
      </Container>
    </>
  );
}

// add skills and photo.  New boxes??

export default About;
