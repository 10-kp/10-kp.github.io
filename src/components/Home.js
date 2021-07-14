import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';
import mainPic from '../Assets/main-page.jpg';

function Home() {
  return (
    <section>
      <Container fluid className='home-section' id='home'>
        <Container className='home-content'>
          <Row>
            <Col md={6} className='home-header'>
              <h1
                style={{ paddingBottom: 0, paddingTop: 0 }}
                className='heading'
              >
                Hi there!
              </h1>

              <h1 className='heading'>
                I'm
                <strong className='main-name'> Kunal.</strong>
              </h1>

              <div
                style={{
                  padding: 50,
                  textAlign: 'left',
                  paddingBottom: 0,
                  paddingTop: 0,
                }}
              >
                <Type />
              </div>

              <div
                style={{
                  padding: 50,
                  textAlign: 'left',
                  paddingBottom: 0,
                  paddingTop: 0,
                }}
              >
                <h3>I am a Full Stack Web Developer</h3>
                <h3>Welcome to my webpage!</h3>
              </div>
            </Col>

            <Col md={5} style={{ paddingBottom: 0, paddingTop: 50 }}>
              <img src={mainPic} alt='home pic' className='img-fluid' />
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
