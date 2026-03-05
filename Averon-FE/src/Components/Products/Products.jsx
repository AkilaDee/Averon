import React, {useRef} from 'react'
import './Products.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import product1 from '../../assets/product1.jpg'
import product2 from '../../assets/product2.png'
import product3 from '../../assets/product3.jpg'


const Products = () => {

    const slider = useRef();
    let tx = 0;

    const slideForward = ()=>{
        if(tx > -50){
            tx -= 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
    }

    const slideBackward = ()=>{
        if(tx < 0){
            tx += 25;
        }
        slider.current.style.transform=`translateX(${tx}%)`
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
                            <h3> Cinnamon ALba</h3>
                            <span>Alba ceylon</span>
                        </div>
                        <p>
                            Best quality Alba grade true ceylon cinnamon.
                        </p>
                    </div>

                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="product-info">
                        <img src={product2} alt="" />
                        <div>
                            <h3> Cinnamon C5</h3>
                            <span>Alba ceylon</span>
                        </div>
                        <p>
                            Best quality C5 grade true ceylon cinnamon.
                        </p>
                    </div>

                </div>
            </li>
            <li>
                <div className="slide">
                    <div className="product-info">
                        <img src={product3} alt="" />
                        <div>
                            <h3> Cinnamon C4</h3>
                            <span>Alba ceylon</span>
                        </div>
                        <p>
                            Best quality C4 grade true ceylon cinnamon.
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
