import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import Type from './Type';

function Home() {
  return (
    <section>
      <Container fluid>
        <Container>
          <Row>
            <Col md={12} className='home-header'>
              <h1 className='heading'>Hi There!</h1>

              <h1 className='heading'>
                I'm
                <strong className='main-name'> Kunal</strong>
              </h1>

              <h2 className='heading-name'>Welcome to my webpage!</h2>
              <h5 className='heading-name'>Please feel free to browse</h5>

              <div style={{ padding: 30, textAlign: 'left' }}>
                <Type />
              </div>
            </Col>
          </Row>
        </Container>
      </Container>
    </section>
  );
}

export default Home;
