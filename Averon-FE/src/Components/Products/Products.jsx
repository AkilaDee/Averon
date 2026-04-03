import React, {useRef} from 'react'
import './Products.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import product1 from '../../assets/alba.JPG'
import product2 from '../../assets/c5spec.JPG'
import product3 from '../../assets/c5stick.JPG'


const Products = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = () => {
        // We have 3 slides. 100 / 3 = 33.33
        // To reach the last slide, tx should go to -66.66
        if (tx > -66) { 
            tx -= 33.33;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }

    const slideBackward = () => {
        if (tx < 0) {
            tx += 33.33;
        }
        slider.current.style.transform = `translateX(${tx}%)`;
    }



  return (
    <div className='products'>
      <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="product-info">
                        <img src={product1} alt="" />
                        <div>
                            <h3> Cinnamon Alba</h3>
                            {/* <span>Alba ceylon</span> */}
                        </div>
                        <p>
                           Alba grade true ceylon cinnamon.
                        </p>
                    </div>

                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="product-info">
                        <img src={product2} alt="" />
                        <div>
                            <h3> Cinnamon C5 Special</h3>
                            {/* <span>C5 Special ceylon</span> */}
                        </div>
                        <p>
                            C5 Special grade true ceylon cinnamon.
                        </p>
                    </div>

                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="product-info">
                        <img src={product3} alt="" />
                        <div>
                            <h3> Cinnamon C5</h3>
                            {/* <span>C5 ceylon</span> */}
                        </div>
                        <p>
                            C5 grade true ceylon cinnamon.
                        </p>
                    </div>

                </div>
            </li>
        </ul>
      </div>
    </div>
  )
}

export default Products
