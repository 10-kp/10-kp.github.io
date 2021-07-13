import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import profilePic from '../Assets/kunal-pic.jpg';
import ReactRoundedImage from 'react-rounded-image';

function About() {
  return (
    <Container fluid>
      <Container>
        <Col md={5} style={{ paddingBottom: 4, paddingTop: 80 }}>
          <div style={{ display: 'flex' }}>
            <ReactRoundedImage image={profilePic} />
          </div>
        </Col>

        <Row style={{ justifyContent: 'center', padding: '40px' }}>
          <Col
            md={12}
            style={{
              justifyContent: 'center',
              paddingTop: '30px',
              paddingBottom: '0.3px',
            }}
          >
            <h1>Something About Me</h1>

            <h5>
              I am a budding Web Developer with a Certificate in Full Stack Web
              Deveopment Bootcamp Certificate Program from the University of
              Oregon.
            </h5>
          </Col>

          <Col md={12}>
            <h7>
              I started learing and liking programming after realizing the
              immense opportunities to develop apps and better User Interface
              (UI). With my background in Banking, I am keen to leverage my
              experience into creating new ideas using code.
              <br />
              <br />
            </h7>
          </Col>
        </Row>
        <Col md={6}>
          <ul>
            Some of my Front-End skills
            <li>HTML</li>
            <li>CSS</li>
            <li>jQuery</li>
          </ul>
        </Col>
        <Col md={6}>
          <ul>
            Some of my Back-End skills
            <li>MySQL</li>
            <li>APIs</li>
            <li>JSON</li>
          </ul>
        </Col>
        <Row style={{ justifyContent: 'center', position: 'relative' }}>
          <h5>Check out my resume below.</h5>
          <Button
            variant='primary'
            href='https://docs.google.com/document/d/1Ru-sJ7flEH7-rsOqHtAzzqLpuIsMyCES7iQPQAEbADo/edit?usp=sharing'
            target='_blank'
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>
      </Container>
    </Container>
  );
}

export default About;
