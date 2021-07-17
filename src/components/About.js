import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Button from 'react-bootstrap/Button';
import { AiOutlineDownload } from 'react-icons/ai';
import profilePic from '../Assets/kunal-pic.jpg';
import ReactRoundedImage from 'react-rounded-image';
import Skills from './Skills';

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
              paddingTop: '20px',
              paddingBottom: '20px',
            }}
          >
            <h1>
              Something About <strong>Me</strong>
            </h1>

            <h5>
              I am A Web Developer with a Certificate in Full Stack Web
              Deveopment Bootcamp Certificate Program from the University of
              Oregon.
            </h5>
          </Col>

          <Col
            md={12}
            style={{
              justifyContent: 'center',
              paddingTop: '20px',
              paddingBottom: '0px',
            }}
          >
            <h6>
              I started learing and liking programming after realizing the
              immense opportunities to develop apps and better User Interface
              (UI). With my background in Banking, I am keen to leverage my
              experience into creating new ideas using code.
              <br />
              <br />
            </h6>
          </Col>
        </Row>

        <Row
          style={{
            justifyContent: 'center',
            position: 'relative',
            paddingTop: 0,
            paddingBottom: 30,
          }}
        >
          <h1>Check out my resume below </h1>
          <Button
            variant='primary'
            href='https://docs.google.com/document/d/1j_Yk7Yqr9ph5FLpm8zyhX-aJrJ2qYzlUlM2L8Ex9-48/edit?usp=sharing'
            target='_blank'
          >
            <AiOutlineDownload />
            &nbsp;Download CV
          </Button>
        </Row>

        <h1>
          Professional <strong>Skillset </strong>
        </h1>

        <Skills />
      </Container>
    </Container>
  );
}

export default About;
