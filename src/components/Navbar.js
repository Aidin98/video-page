import React, { useState, useEffect } from 'react';
import { Button } from './Button';
import { Link } from 'react-router-dom';
import './Navbar.css';


function Navbar() {
  const [click, setClick] = useState(false);
  const [button, setButton] = useState(true);
   const [show,handleShow]=useState(false)
  const handleClick = () => setClick(!click);
  const closeMobileMenu = () => setClick(false);

  const showButton = () => {
    if (window.innerWidth <= 960) {
      setButton(false);
    } else {
      setButton(true);
    }
  };

  useEffect(() => {
    showButton();
     window.addEventListener('scroll' , () =>{
                if(window.scrollY>100){
                    handleShow(true)
                }else{
                    handleShow(false)
                }
            })
            return ()=>{
                window.removeEventListener('scroll')
            }
  }, []);

  window.addEventListener('resize', showButton);
  
  return (
    <>
      <nav className={`navbar ${show && 'navbar_black'}`}>
        <div className='navbar-container'>
          <Link to='/' className='navbar-logo' onClick={closeMobileMenu}>
            AB
           <i class="fas fa-blog" style={{marginLeft:'10px'}}></i>
          </Link>
          <div className='menu-icon' onClick={handleClick}>
            <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
          </div>
          <ul className={click ? 'nav-menu active' : 'nav-menu'}>
            <li className='nav-item'>
              <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                Home
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/sign-up'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                Contact me
              </Link>
            </li>
            <li className='nav-item'>
              <Link
                to='/products'
                className='nav-links'
                onClick={closeMobileMenu}
              >
                My Projects
              </Link>
            </li>

    </ul>
        </div>
      </nav>
    </>
  );
}

export default Navbar;