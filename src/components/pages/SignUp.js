import React,{useState} from 'react'
import '../../App.css'
import {db} from '../../firebase'
import emailjs from 'emailjs-com'
import Contact from './Contact'
export default function SignUp (){
  
    return(
        <div className='container' >
            <div className='first'>
                <h3 style={{color:'#fff'}}>Don't be a stranger</h3>
                <h1 style={{color:'#fff'}}>CONTACT ME!</h1>
            </div>
            <div className='contact'>
                <h1 className='tit' >
                    Lets Work Together
                </h1>
                <h1 className='tit' >
                   Drop Me A Line
                </h1>
               <Contact />

            </div>
        </div>
    )
}