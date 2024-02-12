import React from 'react';
import { Container, Row, Col } from "react-bootstrap";
import Particle from "./Particle";

const About = () => {
  return (
   <section>
      <Container fluid className="home-section" id="home">
        <Particle />
        <Container className="home-content">
          <Row>
            <Col md={7} className="home-header">
              <h1 style={{ paddingBottom: 15 }} className="heading">
              About us
              </h1>
<p>Welcome to Mymusic-list Website.com

Key Features of MusicPlayerWebsite:

Extensive Music Library: We have curated an extensive collection of songs from various genres, including pop, rock, hip-hop, classical, jazz, and more. With thousands of tracks at your fingertips, you'll never run out of options to enjoy.

Personalized Playlists: Create your own playlists and curate your music library based on your mood, activities, or specific genres. Our intuitive playlist management system allows you to organize your favorite songs effortlessly.

High-Quality Audio: We believe in delivering music in its purest form. Experience crystal-clear audio with our high-quality streaming and download options, ensuring that you hear every nuance and detail of your favorite songs.</p>
      </Col>
        </Row>
        </Container>
      </Container>
  </section>
  );
}
export default About;
      
    
