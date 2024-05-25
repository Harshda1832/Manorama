import React, { useState } from 'react'
import './Categories.css'

import Metadata from '../Metadata.js';
import { IoCloseSharp } from "react-icons/io5";
import { FaSearch } from "react-icons/fa";
import qr from '../pictures/qr.png'
// import { useNavigate } from 'react-router-dom';



const Categories = () => {
  // const navigate = useNavigate();
  const [detail, setDetail]=useState([]);
  const [payDetail, setPayDetail]=useState([]);


//search product
  const [filter,setFilter] = useState("");
  const searchText = (event) => {
      setFilter(event.target.value);
  }
  let dataSearch = Metadata.filter(item =>{
        return Object.keys(item).some(key=>
          item[key].toString().toLowerCase().includes(filter.toString().toLowerCase()))
      })


//filter buttons
  const[items, setItems]= useState(Metadata);
  const filterItem = (categName) => {
    const updatedItems = Metadata.filter((currElem)=>{
      return currElem.category === categName;
    });
    setItems(updatedItems);
  }

 

//close detail window
  const [close, setClose]= useState(false)
  const detailPage = (Categories)=>
  {
    setDetail([{...Categories}])
    setClose(true)
  }
  
//close payment window
const[payClose, setPayClose] = useState(false);
const payPage = (Categories) =>{
  setPayDetail([{...Categories}])
  setPayClose(true)
}

//whatsapp message
function sendWhatsapp(){
  var name = document.querySelector('.user_name').value;
  var add = document.querySelector('.user_add').value;
  var demand = document.querySelector('.user_demand').value;
  var pay = document.querySelector('.payment_form').value;

  var url = "https://wa.me/9657638087?text=" +"*Name:* "+ name +" want to buy your product"+ "%0a" 
  +"*Address:* "+ add + "%0a"
  +"*Customization:* "+ demand + "%0a"
  +"*Payment done? :* "+ pay + "%0a"

  window.open(url, '_blank')
}


  return (

    <>

    <div className='search-wrapper'>
        <div className='search-container'>
          <input type='text' className='search-input' placeholder='Search Something ...'
          value={filter}
          onChange={searchText.bind(this)}
          />

          <button className='search-button'><FaSearch/></button>
        </div>      
    </div>

    <div className='filter-button-div'>
        <button className='filter-button' onClick={()=>filterItem('')}>All</button>
        <button className='filter-button' onClick={()=>filterItem('wedding')}>Wedding</button>
        <button className='filter-button' onClick={()=>filterItem('birthday')} >Birthday</button>
        <button className='filter-button' onClick={()=>filterItem('customized')}>Customized</button>
        <button className='filter-button' onClick={()=>filterItem('valentine')}>Valentine</button>
    </div>




   

   {/* 
    //for filter div */}

<div className='categories_background_filter'>
{
  close? 
  <div className='detail_container_filter'>
  <div className='detail_content_filter'>
    <button className='close_filter' onClick={()=> setClose(false)}><IoCloseSharp/></button>
    {
      detail.map((xfilter)=>
      {
        return(
          <>
          <div className='detail_info_filter'>
            <div className='img_box_filter'>
              <img src={xfilter.img} alt={xfilter.title}></img>
            </div>
            <div className='product_detail_filter'>
              <h2>{xfilter.title}</h2>
              <h3>Rs. {xfilter.price}</h3>
              <p>{xfilter.desc}</p>
              <p>Fabric: {xfilter.fabric}</p>
              <p>Size: {xfilter.size}</p>
              <button onClick={()=> payPage(xfilter)}>Order Now</button>
            </div>
          </div>
          </>
        )
      })
    }
  </div>
</div>:null
}

{
    payClose?
    <div className='payment_container'>
      <div className='payment_content'>
      <button className='close_payment' onClick={()=> setPayClose(false)}><IoCloseSharp/></button>
      {
        payDetail.map((el)=>
          {
            
            return(
              <div className='product_price'>
                <h2>{el.title}</h2>
                <h2>Rs: {el.price}</h2>
                <input type='text' className='user_name' placeholder='Write your name here'/><br/> <br/>
                <input type='text' className='user_add' placeholder='Address'/><br/> <br/>
                <input type='text' className='user_demand' placeholder='Any customization?'/><br/> <br/>
                <h5>Scan for Payment</h5>
                <img src={qr} alt='QR code'></img><br/> <br/>

                <input type='text' className='payment_form' placeholder='Have you done the payment?(Y/N)'/><br/> <br/>
                
                <div className='whtsp'>
                <button onClick={()=>sendWhatsapp()}>Connect Via WhatsApp</button>
                </div>
                
              </div>
            )
            
            
          })
      }
      </div>
    </div>:null
  }

<div className='filter-button-container'>
{
      items.map((filtEle)=>
      {
        
      return(
        <>
        <div className='filter-box'>
          <div className='filter-content'>
            <div className='filter-img-box'>
              <img src={filtEle.img} alt={filtEle.title}></img>
            </div>

            <div className='filter-detail'>
              <div className='filter-info'>
                <h3>{filtEle.title}</h3>
                <p>Rs.{filtEle.price}</p>
              </div>
              <button onClick={()=> detailPage(filtEle)}>View</button>
            </div>
          </div>
        </div>
        </>
      )
      })
    }
</div>



</div>
<hr/>
    

{/* for search bar */}
    
    <div className='categories_background'>

    {
      close? 
      <div className='detail_container'>
      <div className='detail_content'>
        <button className='close' onClick={()=> setClose(false)}><IoCloseSharp/></button>
        {
          detail.map((x)=>
          {
            return(
              <>
              <div className='detail_info'>
                <div className='img_box'>
                  <img src={x.img} alt={x.title}></img>
                </div>
                <div className='product_detail'>
                  <h2>{x.title}</h2>
                  <h3>Rs. {x.price}</h3>
                  <p>{x.desc}</p>
                  <p>Fabric: {x.fabric}</p>
                  <p>Size: {x.size}</p>
                  <button>Order now</button>
                </div>
              </div>
              </>
            )
          })
        }
      </div>
    </div>:null
    }


    <div className='container'>
      {
        dataSearch.map((curEle)=>
        {
          
          return(
            <>
            <div className='box'>
              <div className='content'>
                <div className='img-box'>
                  <img src={curEle.img} alt={curEle.title}></img>
                </div>

                <div className='detail'>
                  <div className='info'>
                    <h3>{curEle.title}</h3>
                    <p>Rs.{curEle.price}</p>
                  </div>
                  <button onClick={()=> detailPage(curEle)}>View</button>
                </div>
              </div>
            </div>
            </>
          )
        })

        

      }
    </div>
    
    </div>





    

    </>
  )
}

export default Categories
