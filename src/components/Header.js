import React, { Component } from 'react';
import Fade from 'react-reveal/Fade';
import data from '../data';

class Header extends Component {
  state = {};

  render() {
    return (
      <header id='home'>
        <nav id='nav-wrap'>
          <a className='mobile-btn' href='#nav-wrap' title='Show navigation'>
            Show navigation
          </a>
          <a className='mobile-btn' href='#home' title='Hide navigation'>
            Hide navigation
          </a>

          <ul id='nav' className='nav'>
            <li className='current'>
              <a className='smoothscroll' href='#home'>
                Home
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#about'>
                About
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#resume'>
                Resume
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#portfolio'>
                Works
              </a>
            </li>
            <li>
              <a className='smoothscroll' href='#contact'>
                Contact
              </a>
            </li>
          </ul>
        </nav>
        <div>
          <header>
            <h1>
              <Fade bottom cascade>
                {data.name}
              </Fade>
            </h1>
          </header>
          <Fade bottom>
            <p className='header-title'>
              {data.headerTagline[0]}
              <br></br>
              {data.headerTagline[1]}
              <br></br>
              {data.headerTagline[2]}
              <br></br>
              <button>
                <a
                  href={`mailto:${data.contactEmail}`}
                  rel='noopener noreferrer'
                >
                  Contact
                </a>
              </button>
              <button>
                <a href={`${data.resume}`} rel='noopener noreferrer'>
                  Resume
                </a>
              </button>
            </p>
          </Fade>
        </div>
      </header>
    );
  }
}

export default Header;
