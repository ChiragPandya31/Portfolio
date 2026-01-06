import React from "react";
import Card from "react-bootstrap/Card";
import { ImPointRight } from "react-icons/im";

function AboutCard() {
  return (
    <Card className="quote-card-view">
      <Card.Body>
        <blockquote className="blockquote mb-0">
          <p style={{ textAlign: "justify" }}>
            Hi Everyone, I am <span className="purple">Chirag Pandya </span>
            from <span className="purple"> Gujarat, India.</span>
            <br />
            I am currently pursuing B.Tech in CSE at C.U. Shah University.
            <br />
            I have completed Diploma in CE at CUSP surendranagar.
            <br />
            <br />
            Apart from coding, some other activities that I love to do!
          </p>
          <ul>
            
            <li className="about-activity">
              <ImPointRight /> Reading
            </li>
              <li className="about-activity">
              <ImPointRight /> Playing Games
            </li>
            <li className="about-activity">
              <ImPointRight /> Sports
            </li>
            <li className="about-activity">
              <ImPointRight /> Music
            </li>
            
          </ul>

          <p style={{ color: "#9490eb" }}>
           The errors you don't fix, becomes your limits.{" "}
          </p>
       <h3>~Chirag</h3>
        </blockquote>
      </Card.Body>
    </Card>
  );
}

export default AboutCard;





