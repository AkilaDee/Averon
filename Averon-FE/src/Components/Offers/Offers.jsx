import React from 'react'
import './Offers.css'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.jpg'
// import product3 from '../../assets/product3.jpg'
// import product3 from '../../assets/product3.jpg'


const Products = () => {
  return (
    <div className='products'>
        <div className='product'>
            <img src={product1} alt=" " />
            <div className="caption">
                {/* <img src={pr} /> */}
                <p>Alba Grade</p>
            </div>
        </div>
        <div className='product'>
            <img src={product2} alt=" " />
            <div className="caption">
                {/* <img src={pr} /> */}
                <p>C5 Grade</p>
            </div>
        </div>
        <div className='product'>
            <img src={product3} alt=" " />
            <div className="caption">
                {/* <img src={pr} /> */}
                <p>C4 Grade</p>
            </div>
        </div>
    </div>
  )
}

export default Products
