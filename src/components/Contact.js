import React from 'react';
import { Container, Row, Col } from 'react-bootstrap';

import { AiOutlineMail, AiFillGithub, AiOutlineTwitter } from 'react-icons/ai';
import { FaLinkedinIn } from 'react-icons/fa';

function Contact() {
  return (
    <Container fluid className='home-about-section' id='about'>
      <Container>
        <div className='git-cont row'>
          <div className='col-12 col-sm-6 half'>
            <form
            // action={
            //   contact.contactUrl ? contact.contactUrl : 'https://formspree.io'
            // }
            // method={contact.contactUrl ? 'POST' : 'GET'}
            >
              <input
                type='text'
                id='fname'
                name='firstname'
                placeholder='Your name'
                required
              ></input>
              <input
                type='mail'
                id='mailid'
                name='Email'
                placeholder='Email Address'
                required
              ></input>
              <input
                type='text'
                id='sub'
                name='Subject'
                placeholder='Subject'
                required
              ></input>
              <textarea
                id='msg'
                name='message'
                placeholder='Message'
                required
              ></textarea>
              <button style={{ cursor: 'pointer' }} type='submit'>
                Send Message
              </button>
            </form>
          </div>
        </div>
        <Row>
          <Col
            md={9}
            className='home-about-social'
            style={{ paddingBottom: 270, paddingTop: 100 }}
          >
            <h1>Feel free to connect with me</h1>

            <ul className='home-about-social-links'>
              <h7>Email Me</h7>
              <ul className='social-icons'>
                <a
                  href='mailto: kp_1@outlook.com'
                  target='_blank'
                  className='icon-colour home-social-icons'
                >
                  <AiOutlineMail />
                </a>
              </ul>

              <ul className='social-icons'>
                <h7>GitHub</h7>
                <a
                  href='https://github.com/10-kp/'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour home-social-icons'
                >
                  <AiFillGithub />
                </a>
              </ul>
              <ul className='social-icons'>
                <h7>Tweet</h7>
                <a
                  href='https://twitter.com/KP_83'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <AiOutlineTwitter />
                </a>
              </ul>
              <ul className='social-icons'>
                <h7>LinkedIn</h7>
                <a
                  href='https://www.linkedin.com/in/kunalkhetarpal'
                  target='_blank'
                  rel='noreferrer'
                  className='icon-colour  home-social-icons'
                >
                  <FaLinkedinIn />
                </a>
              </ul>
            </ul>
          </Col>
        </Row>
      </Container>
    </Container>
  );
}
export default Contact;
