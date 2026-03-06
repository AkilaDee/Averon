import React from 'react'
import './Offers.css'
import offer1 from '../../assets/product1.jpg'
import offer2 from '../../assets/product2.png'
import offer3 from '../../assets/product3.jpg'
// import product3 from '../../assets/product3.jpg'
// import product3 from '../../assets/product3.jpg'


const offers = () => {
  return (
    <div className='offers'>
        <div className='offer'>
            <img src={offer1} alt=" " />
            <div className="caption">
                {/* <img src={pr} /> */}
                <p>Sourcing (The Origin)</p>
            </div>
        </div>
        <div className='offer'>
            <img src={offer2} alt=" " />
            <div className="caption">
                {/* <img src={pr} /> */}
                <p>Processing (The Craft)</p>
            </div>

        </div>
        <div className='offer'>
            <img src={offer3} alt=" " />
            <div className="caption">
                {/* <img src={pr} /> */}
                <p>Delivery (The Freshness)</p>
            </div>

        </div>
    </div>
  )
}

export default offers
