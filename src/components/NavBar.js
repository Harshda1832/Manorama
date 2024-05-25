import React, { useState } from 'react'

import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import { GiHamburgerMenu } from "react-icons/gi";
import './navbar.css';

const NavBar = () => {
    const[showMediaIcons, setShowMediaIcons] = useState(false);
  return (
    <>
    <nav className='main-nav '>
        <div className='logo'>
            <h2>
                <span>MANORAMA</span>
            </h2>
            <h6>Stitching Elegance!!</h6>
        </div>

        <div className= {showMediaIcons?"menu-link mobile-menu-link ":"menu-link"}>
            <ul>
                <li><a href='/'>Home</a></li>
                <li><a href='/Categories'>Categories</a></li>
                <li><a href='/Sale'>Sale</a></li>
                <li><a href='/About'>About</a></li>
            </ul>
        </div>

        <div className='social-media'>
            <ul className='social-media-desktop'>
                <li> 
                <a href='https://www.youtube.com/watch?v=8AJ3Kcz5FsM'><FaFacebookSquare className='facebook'/></a>
                </li>

                <li> 
                <a href='https://www.instagram.com/preeta.s_pretty_embriodery?igsh=MTFqZzNxNG9ucTdwbg=='><FaInstagramSquare className='instagram'/></a>
                </li>

                <li> 
                <a href='https://www.youtube.com/watch?v=8AJ3Kcz5FsM'><FaYoutubeSquare className='youtube'/></a>
                </li>
            </ul>

            <div className='hamburger-menu'>
            <a href="#" onClick={() => setShowMediaIcons(!showMediaIcons)}><GiHamburgerMenu/></a>
            </div>

        </div>

        

        
    </nav>
    {/* <section className='hero-section'>
                <p>Welcome to</p>
                <h1>Manorama!!</h1>
        </section>
     */}
    
    </>
    

       

  )
}

export default NavBar
