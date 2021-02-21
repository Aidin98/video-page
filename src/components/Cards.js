import React, { useEffect } from 'react';
import './Cards.css';
import CardItem from './CardItem';
import 'aos/dist/aos.css'
import Aos from 'aos'
import {Avatar} from '@material-ui/core'
function Cards() {
  useEffect(()=>{
    Aos.init({duration:3000})
  })
  return (
    <div  className='cards' style={{background:'lightgrey'}}>
      <h1 data-aos='fade-right'>About me!</h1>
      <div className='about'><Avatar data-aos='fade-right'  className='slika' src='images/slika.jpg' style={{height:'250px',width:'250px'}}/>
      <div data-aos='fade-right' className='information'>
        <h1>Hi I am Aidin Bašić</h1>
      <p>I am highly organised, dedicated Junior Web developer with ability to improve working environments and a commintment to employee welfare.I posses strong Web development skills and i am good at solving problemsMy areas of intersts include computer system, software devlopment, and web develoment. I am commited to continious learning and proffesional development within the IT fields. I have produced a couple personal projects that you can see at my GitHub profile</p>
      </div>
      
      
      </div>
      <div className='education'>
        <div className='school' data-aos='flip-up'>
          <div style={{display:'flex' ,flexDirection:'column',justifyContent:'space-between' }}>
            <h1>Education</h1>
              <ul className='list'>
              <li>Univerzitet Dzemal Bijedic --- 10/2017-11/2020</li>
               I am bachelor od Bussiness Informatics and trought my college i have
learnd alot about programming languages and It in general.

<li>Spark School --- 02/2020-05/2020 </li>
I was participating a web development curs where we were learning abou
web programming languages like HTML and JavaScript.

              </ul>
          </div>
        </div>
        <div className='work' data-aos='flip-up'>
          <h1>Work Experience</h1>
          <ul>
            <li>UniCredit Bank Mostar</li>
            • archivist
            <br/>
Scanning searching and storage of documents.

          </ul>
        </div>
      </div>
      <h1 className='project'>Check out some of my projects</h1>
       <div data-aos='fade-flip' className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items' style={{background:'#fff',padding:'10px',borderRadius:'30px'}}>
            <CardItem 
              src='images/facebook.PNG'
              text='Check out my live Facebook Clone'
              label='React'
              path='https://fb-clone-with-firebase-2u7e6h1hk.vercel.app/'
            />
            
            <CardItem
              src='images/aaa.PNG'
              text='Check out my live Netflix page'
              label='React'
              path='https://netflix-clone-ten-sage.vercel.app/'
            />
          </ul>
          </div>
    </div>
    </div>
  );
}

export default Cards;