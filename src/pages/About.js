import React from 'react'
import './About.css'
import vision from '../pictures/vision.jpeg'
import approach from '../pictures/approach.jpeg'
import { FaFacebookSquare, FaInstagramSquare, FaYoutubeSquare} from "react-icons/fa";
import Payment from '../pictures/payment-option.jpeg';

const About = () => {
  return (
    <>
    <div className='about-bg'>

    <div className='vision-div'>
      <h1>Our Vision</h1>
      <h3>To be the foremost online marketplace 
        for beautiful and unique embroidery hoop designs, 
        sparking creativity and delight in every crafter.</h3>
        <img src={vision} alt='vision-img' className='vision-img'/>
      
    </div>

    <div className='approach-div'>

    <h1>Our Approach</h1>
    <h4>We offer an extensive selection of meticulously crafted hoop designs, 
    complemented by easy-to-use customization features. Our commitment to 
    exceptional quality, responsive customer service, and innovative 
    design ensures a seamless and inspiring shopping experience for embroidery 
    enthusiasts of all skill levels.</h4>
    <img src={approach} alt='approach-img' className='approach-img'/>
    </div>

    <div className='contact-div'>
    <input placeholder='Type your search here' type='text' className='contact-ip'/>
    <h5>Follow us on:</h5>
    <a href='https://www.youtube.com/watch?v=8AJ3Kcz5FsM'><FaFacebookSquare className='facebook'/></a>
    <a href='https://www.instagram.com/preeta.s_pretty_embriodery?igsh=MTFqZzNxNG9ucTdwbg=='><FaInstagramSquare className='instagram'/></a>
    <a href='https://www.youtube.com/watch?v=8AJ3Kcz5FsM'><FaYoutubeSquare className='youtube'/></a>

    <h5>Payment Options: </h5>
    <img src={Payment} alt='payment-option' className='payment-img'/>
    </div>
    
    </div>
    
    </>
  )
}

export default About
