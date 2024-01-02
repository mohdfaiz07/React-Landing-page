import React from 'react'

const Product = () => {
  return (
    <div className='main'>
        <div className="left">
            <h2>Hiii  I'm animation pro</h2>
            <h1>Animation Designer</h1>
            <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit. Placeat magnam quaerat praesentium voluptas quos minima, aliquam ipsam sapiente? Blanditiis quis sit temporibus fuga earum, ipsam ut necessitatibus tempore sunt nulla.</p>
            <div className='icon'>
                <div className="icn"><i class="ri-whatsapp-fill"></i></div>    
                <div className="icn"><i class="ri-instagram-fill"></i></div>    
                <div className="icn"><i class="ri-twitter-fill"></i></div>    
                

            </div>
        </div>
        
        <div className="right">
            <img src="/designerLogo.png" alt="logo" />
        </div>


    </div>
  )
}

export default Product