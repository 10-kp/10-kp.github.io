import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';
import ProjectCard from './ProjectCards';

import empdir from '../Assets/home-pagesnap.png';
import budget from '../Assets/budgetAppPic.png';
import workout from '../Assets/fitness-track.png';
import tech from '../Assets/tech-blog.png';
import note from '../Assets/note-taker-pic.png';
import stash from '../Assets/homepage.png';

function Projects() {
  return (
    <Container fluid className='project-section'>
      <Container>
        <h1 className='project-heading'>My Recent Projects</h1>

        <Row style={{ justifyContent: 'center', paddingBottom: '20px' }}>
          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={note}
              title='Book Search'
              description='React based Google Books Search app created using MERN (MongoDB, Express, React, Node'
              link='https://secure-springs-57437.herokuapp.com/'
              link2='https://github.com/10-kp/Google-Books-Search'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={tech}
              title='E-Commerce Site'
              description='An app built using back-end for an e-commerce site. It was created using ORM, Sequelize, and MySQL.'
              link='https://nameless-ridge-55768.herokuapp.com/'
              link2='https://github.com/10-kp/tech-blog'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={stash}
              title='Stashbusters'
              description='A Group Project - An app to help yarn hoarders organize their stash. Created using React, Socket.io and more'
              link='https://damp-hollows-69227.herokuapp.com/'
              link2='https://github.com/10-kp/sable'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={workout}
              title='Workout Tracker'
              description='A NoSQL database to view, create, and track daily workouts with logging multiple resistance and cardio exercises'
              link='https://thawing-ravine-68564.herokuapp.com/?id=60b8081e9788b20015b3fcf0'
              link2='https://github.com/10-kp/workout-tracker'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={empdir}
              title='Employee Directory'
              description='Created a React based app to create an employee directory. The app allows a user to view employees, access employee info, and sory by first and last name.'
              link='https://10-kp.github.io/employee_directory/'
              link2='https://github.com/10-kp/employee_directory'
            />
          </Col>

          <Col md={4} className='project-card'>
            <ProjectCard
              imgPath={budget}
              title='Budget Tracker'
              description='Progressive Web budget App to track account balance, withdrawals, and deposits with or without a data connection'
              link='https://github.com/10-kp/budget_tracker'
              link2='https://github.com/10-kp/budget_tracker'
            />
          </Col>
        </Row>
      </Container>
    </Container>
  );
}

export default Projects;
