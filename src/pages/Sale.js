import React from 'react'
import bundle_deals from '../pictures/bundle_deals.jpeg'
import wool_comfort from '../pictures/wool_comfort.jpeg'
import wool_comfort_2 from '../pictures/wool_comfort_2.jpeg'
import './sale.css';

const Sale = () => {
  return (
    <>
    
        <div className='bundle-sale-div'>
          <img src={bundle_deals} className='bundle-sale-img' alt='bundle-deals'/>
          <div className='bundle-sale-text-box'>
            <p>BUNDLE DEALS</p>
            <span>40%</span>
            <p className='offonsec'>off on your second purchase</p>
          </div>
        </div>

        <div className='wool-comfort-div'>
          <img src={wool_comfort} className='wool-comfort-img' alt='wool-comfort'/>
          <img src={wool_comfort_2} className='wool-comfort-img2' alt='woolcomfort'/>
          <p>WOOL COMFORTS</p>
          <h1 className='wool-comfort-text'>Limited Time Offer: Enjoy <span>50% </span>off all embroidery designs on woolen cloth!</h1>
        </div>
    
      
    </>
  )
}

export default Sale
