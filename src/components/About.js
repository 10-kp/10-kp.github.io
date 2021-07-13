import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import profilePic from '../Assets/kunal-pic.jpg';
import ReactRoundedImage from 'react-rounded-image';
import Skills from './Skills';
import { skillsBar } from '../profile';

function About() {
  return (
    <Container fluid className='about-section'>
      <Container>
        <Col
          md={12}
          style={{
            paddingBottom: 10,
            paddingTop: 100,
          }}
        >
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            <ReactRoundedImage image={profilePic} />
          </div>
        </Col>

        <Row style={{ justifyContent: 'left', padding: '40px' }}>
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

        <h1 className='project-heading'>
          Professional <strong>Skillset </strong>
        </h1>

        <Skills />

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
