import React from 'react';
import { Col, Row } from 'react-bootstrap';
import { AiFillHtml5, AiOutlineConsoleSql, AiFillApi } from 'react-icons/ai';
import {
  DiNodejs,
  DiReact,
  DiMongodb,
  DiBootstrap,
  DiMaterializecss,
} from 'react-icons/di';
import { SiCsswizardry, SiBulma } from 'react-icons/si';

function Skills() {
  return (
    <Row style={{ justifyContent: 'center', paddingBottom: '50px' }}>
      <Col xs={4} md={2} className='tech-icons'>
        <AiFillHtml5 />
        <h6 class='mt-2'>HTML</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiCsswizardry />
        <h6 class='mt-2'>CSS</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiReact />
        <h6 class='mt-2'>React</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <AiOutlineConsoleSql />
        <h6 class='mt-2'>SQL</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiNodejs />
        <h6 class='mt-2'>NodeJS</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMongodb />
        <h6 class='mt-2'>MongoDb</h6>
      </Col>

      <Col xs={4} md={2} className='tech-icons'>
        <DiBootstrap />
        <h6 class='mt-2'>Bootstrap</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <SiBulma />
        <h6 class='mt-2'>Bulma</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <AiFillApi />
        <h6 class='mt-2'>API</h6>
      </Col>
      <Col xs={4} md={2} className='tech-icons'>
        <DiMaterializecss />
        <h6 class='mt-2'>Materialize</h6>
      </Col>
    </Row>
  );
}

export default Skills;
