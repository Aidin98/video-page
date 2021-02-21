import React from 'react';
import './App.css';
import { Button } from './components/Button';
import './components/HeroSection.css'
import Typewriter  from 'typewriter-effect'
import ReactTypingEffect from 'react-typing-effect'
function HeroSection() {
  return (
    <div className='hero-container'>
      <video src='/videos/video-2.mp4' autoPlay loop muted />
    <h2>
     <Typewriter 
     onInit={(typewriter)=>{
        typewriter.typeString('Hi, I am').start()
      } } />
</h2>
      <h1>
     <Typewriter 
     onInit={(typewriter)=>{
        typewriter.typeString('AIDIN BAŠIĆ').start()
      } } /></h1>
      <p>Frontend Web Developer</p>
      <div className='hero-btns'>
        <Button
          className='btns'
          buttonStyle='btn--outline'
          buttonSize='btn--large'
        >
          CONTACT ME
        </Button>
        
        
      </div>
    </div>
  );
}

export default HeroSection;