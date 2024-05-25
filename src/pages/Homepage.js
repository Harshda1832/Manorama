import React from 'react'
import { useNavigate } from 'react-router-dom';
import pic1 from '../pictures/pic1.jpeg'
import pic2 from '../pictures/pic2.jpeg'
import Frame from '../pictures/frame-on-olive.jpeg'
import div2bg from '../pictures/olivegreen-bg.jpeg'
import div1 from '../pictures/div1.jpg'
import plant from '../pictures/plant-corner.jpeg'
import summer from '../pictures/summer-bloom.jpeg'
import mr from '../pictures/mr-and-mrs.jpeg'
import home from '../pictures/home-decor.jpeg'
//import Categories from './Categories'

import './Homepage.css';

const Homepage = () => {
  const navigate =useNavigate();
  return (
    
    <>
    
    
    <div className='div1'>
      <img src={div1} alt='div1' className='div1img'/>
      <h2 className='overimagetext'>Frame your creativity with our quality embroidery hoops!!!</h2>
       <h1 className='overimagetext2'>Explore, stitch, and create beautiful designs effortlessly.</h1> 
       <h1 className='overimagetext3'>Shop now for quality hoops that elevate your craft.</h1>
    </div>  

    <div className='div2'>
      <img src={div2bg}  alt='div2bg' className='div2bg'/>
      <img  src={Frame} alt='frame' className='frame'/>
      <img src={pic1} alt='pic1' className='pic1'/>
      <img src={pic2} alt='pic2' className='pic2'/>
      <h1 className='welcome'>Welcome  </h1>
      <h1 className='logo2'>to MANORAMA</h1>
      <p className='welcome-speech'>We're thrilled to have you here! Welcome to a realm of personalized embroidery, where creativity and craftsmanship converge. Our commitment is to craft bespoke hoop designs that embody your unique style.<br></br>
      <br></br> In our studio, your vision guides us as we intricately weave custom artistry into every stitch. Embrace the joy of personalized embroidery, where each creation tells a distinctive story, reflecting your individuality. Step into a world of unique elegance, where our team transforms your imagination into exquisitely tailored designs.</p>

      <button className='shop-now' onClick={()=>navigate('/Categories')}>Shop Now</button>

    </div>

    <div className='div3'>
      <h1 className='div3title'>In the Spotlight...</h1>
      <ul className='spotlight'>
        <li>
          <img src={plant} className='plant-corner' alt='plant-corner'/>
          <h4 className='plant-corner-text'>Plant Corner</h4>
        </li>
        <li>
          <img src={summer} className='summer-bloom' alt='summer-bloom'/>
          <h4 className='summer-bloom-text'>Summer Bloom</h4>
        </li>
        <li>
          <img src={mr} className='mr-mrs' alt='mr-mrs'/>
          <h4 className='mr-mrs-text'>Mr & Mrs</h4>
        </li>
        <li>
          <img src={home} className='home-decor' alt='home-decor'/>
          <h4 className='home-decor-text'>Home Decor</h4>
        </li>

      </ul>
      <div className='button-div3'>
      <button className='shop-now-div3' onClick={()=>navigate('/Categories')}>Explore More</button>
      </div>

    </div>
    </>
    
  )
}

export default Homepage
