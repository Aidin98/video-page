import React, { useEffect } from 'react'

import '../../App.css'
import HeroSection from '../../HeroSection'
import Cards from '../Cards'
import Footer from '../Footer'

import Aos from 'aos/dist/aos'
function Home (){
    useEffect   (()=>{
        Aos.init({duration:2000})
    })

    return(
    <>
    <HeroSection/>
    < Cards  data-aos='fade-left'/>
    <Footer />
    </>
    )
}
export default Home