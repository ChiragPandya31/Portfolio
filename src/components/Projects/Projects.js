import React from "react";
import { Helmet } from "react-helmet";  // Import Helmet for SEO
import { Container, Row, Col } from "react-bootstrap";
import ProjectCard from "./ProjectCards";
import Particle from "../Particle";
import spotifyClone from "../../Assets/Projects/spotifyClone.jpg";
import Livetrack from "../../Assets/Projects/livetrack.png";
import BubbleGame from "../../Assets/Projects/bubblegame.png";
import AppleiColne from "../../Assets/Projects/applelogo.png";

function Projects() {
  return (
    <Container fluid className="project-section">
      <Helmet>
        <title>Chirag Pandya - Projects</title>
        <meta name="description" content="A collection of projects created by Chirag Pandya, including web development, career guidance platforms, and more." />
        <meta name="keywords" content="Chirag Pandya, Projects, Web Development, Career Paths, React.js" />
        <meta property="og:title" content="Chirag Pandya - Projects" />
        <meta property="og:description" content="A collection of projects created by Chirag Pandya, including web development, career guidance platforms, and more." />
        <meta property="og:image" content="https://chiragpandya.com/readme-img.png" />
        <meta property="og:url" content="https://chiragpandya.com/projects" />
        <meta property="og:type" content="website" />
        <meta name="twitter:title" content="Chirag Pandya - Projects" />
        <meta name="twitter:description" content="A collection of projects created by Chirag Pandya, including web development, career guidance platforms, and more." />
        <meta name="twitter:image" content="https://chiragpandya.com/readme-img.png" />
        <meta name="twitter:card" content="summary_large_image" />
      </Helmet>

      <Particle />
      <Container>
        <h1 className="project-heading">
          My <strong className="purple">Projects </strong>
        </h1>
        <p style={{ color: "white" }}>
          Here are few projects I've worked on.
        </p>
        <Row style={{ justifyContent: "center", paddingBottom: "10px" }}>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={spotifyClone}
              isBlog={false}
              title="spotifyClone"
              description="Spotify-clone is the ultimate music player for every mood, inspired by popular music player app 'Spotify'.Enjoy seamless playback, choose favourite artists and experience high-quality audio with an advanced audio equalizer, And many more options like play/pause, next and previous songs.Enjoy your vibe with Spotify-clone."
              ghLink="https://github.com/ChiragPandya31/Spotify.github.io"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={Livetrack}
              isBlog={false}
              title="Live Track"
              description="LiveTrack lets you monitor any location in real time. From delivery routes to on-the-go updates, view exact locations, and real-time movement on an interactive map. Stay informed and connected with LiveTrack!"
              ghLink="https://github.com/ChiragPandya31/Real-Time-Tracker"
              demoLink="https://real-time-tracker-y1u6.onrender.com"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={BubbleGame}
              isBlog={false}
              title="Bubble Burst"
              description="Bubble Burst is a thrilling 1-minute short game where you pop bubbles with random numbers up to 10. Each correct hit scores 10 points, but be careful—if you pop the wrong bubble, the game ends! With a fast-paced timer and a challenging hit mechanism, every click counts, keeping you on the edge of your seat."
              ghLink="https://github.com/ChiragPandya31/bubble-game"
              demoLink="https://chiragpandya31.github.io/bubble-game/"
            />
          </Col>
          <Col md={4} className="project-card">
            <ProjectCard
              imgPath={AppleiColne}
              isBlog={false}
              title="Apple-iClone"
              description="The Apple iClone is a frontend project that is the clone of official apple i phone website that features an animated intro, autoplay videos, 3D models of the iPhone 15 Pro Titanium in different sizes and colors, and a gaming performance section. It’s fully responsive for a smooth experience across devices, with additional information organized in the footer."
              ghLink="https://github.com/ChiragPandya31/Apple_iPhoneClone"
              demoLink="https://i-phone-clone.netlify.app/"
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
