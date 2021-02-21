import React, { useEffect } from 'react';
import './Footer.css';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import 'aos/dist/aos.css'
import Aos from 'aos'
function Footer() {
  useEffect(()=>{
    Aos.init({duration:3000})
  })
  return (
    <div className='footer-container'>
      <section className='footer-subscription'>
        <p className='footer-subscription-heading'>
          SKILLS
        </p>
        <p className='footer-subscription-text'>
          You can contact me at any time.
        </p>
        <div className='input-areas'>
          <form>
           
            <Button buttonStyle='btn--outline'>Contact me</Button>
          </form>
        </div>
      </section>
      <div class='footer-links'>
        <div className='footer-link-wrapper'>
          <div data-aos='fade-right' class='footer-link-items'>
            <h2>Web Skills</h2>
            
            <Link to='/'>HTML5</Link>
            <Link to='/'>CSS</Link>
            <Link to='/'>JavaScript</Link>
            <Link to='/'>React.js</Link>
          </div>
          <div data-aos='fade-right' class='footer-link-items'>
            <h2>Other</h2>
            <Link to='/'>C++</Link>
            <Link to='/'>SQL Database</Link>
            <Link to='/'>Bussiness Inteligence</Link>
            <Link to='/'>Microsoft Office Packet</Link>
          </div>
        </div>
        <div className='footer-link-wrapper'>
          <div data-aos='fade-right' class='footer-link-items'>
            <h2>Languages</h2>
            <Link to='/'>Bosnian C1</Link>
            <Link to='/'>English B2</Link>
            <Link to='/'>German A1</Link>
            
          </div>
          <div data-aos='fade-right' class='footer-link-items'>
            <h2>Social Media</h2>
            <a href='https://www.instagram.com/aidin_98/' target='_blank'>Instagram</a>
            <a href='https://www.facebook.com/aidin.basic' target='_blank'>Facebook</a>
            <a href='https://www.linkedin.com/in/aidin-ba%C5%A1i%C4%87-41bb6b206/' target='_blank'>Linkedin</a>
            <a href='https://github.com/Aidin98' target='_blank'>GitHub</a>
          </div>
        </div>
      </div>
      <section class='social-media'>
        <div class='social-media-wrap'>
          <div class='footer-logo'>
            <Link to='/' className='social-logo'>
              AB
              <i class='fas fa-blog' style={{marginLeft:'10px'}}/>
            </Link>
          </div>
          <small class='website-rights'>Aidin Basic © 2021</small>
          <div class='social-icons'>
            <a
              class='social-icon-link facebook'
              href='https://www.facebook.com/aidin.basic'
              target='_blank'
              aria-label='Facebook'
            >
              <i class='fab fa-facebook-f' />
            </a>
            <a
              class='social-icon-link instagram'
              href='https://www.instagram.com/aidin_98/'
              target='_blank'
              aria-label='Instagram'
            >
              <i class='fab fa-instagram' />
            </a>
            <Link
              class='social-icon-link youtube'
              to='/'
              target='_blank'
              aria-label='Youtube'
            >
              <i class='fab fa-youtube' />
            </Link>
            <a
              class='social-icon-link twitter'
              href='https://github.com/Aidin98'
              target='_blank'
              aria-label='Twitter'
            >
              <i class='fab fa-github' />
            </a>
            <a
              class='social-icon-link twitter'
              href='https://www.linkedin.com/in/aidin-ba%C5%A1i%C4%87-41bb6b206/'
              target='_blank'
              aria-label='LinkedIn'
            >
              <i class='fab fa-linkedin' />
            </a>
          </div>
        </div>
      </section>
    </div>
  );
}

export default Footer;