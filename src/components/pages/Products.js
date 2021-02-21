import React from 'react'
import '../../App.css'
import CardItem from '../CardItem'
import './Card.css'
import './Products.js'
export default function Products (){
    return(
      <div className='container' style={{position:'relative',paddingTop:'25px'}}> 
        <video src='../videos/video-2.mp4' autoPlay loop muted />
         <div className='cards' style={{background:'transparent',position:'relative'}}>
          
      <h1 style={{color:'#fff'}}>Check out these EPIC Projects!</h1>
      <div className='cards__container'>
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
          <ul className='cards__items' style={{background:'#fff',padding:'10px',borderRadius:'30px'}}>
            <CardItem
              src='images/weather.PNG'
              text='Check out my weather app'
              label='React'
              path='https://weather-app-lemon-three.vercel.app/'
            />
            <CardItem
              src='images/ultra.PNG'
              text='Check out one of my projects'
              label='React'
              path='https://ultra-page-styled-components.vercel.app/'
            />
            <CardItem
              src='images/cocktails.PNG'
              text='Check out my cocktail offer'
              label='React'
              path='https://cocktail-offer.vercel.app/'
            />
          </ul>
        </div>
      </div>
      <h1 style={{color:'#fff',display:'flex'}}>For more projects check out my GitHub page <a style={{display: "table-cell"}} href='https://github.com/Aidin98' target="_blank"><i class="fas fa-arrow-right" style={{color:'white',marginLeft:'10px'}}></i></a></h1>
    </div>
    </div>
    )
}