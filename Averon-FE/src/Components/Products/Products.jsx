import React, {useRef} from 'react'
import './Products.css'
import next_icon from '../../assets/next-icon.png'
import back_icon from '../../assets/back-icon.png'
import product1 from '../../assets/alba.JPG'
import product2 from '../../assets/c5spec.JPG'
import product3 from '../../assets/c5stick.JPG'
import pepper from '../../assets/pepper.jpg'
import cinnamon from '../../assets/cinnamon.jpg'
import cardamom from '../../assets/cardamom.jpg'
import cloves from '../../assets/cloves.jpg'
import vanilla from '../../assets/vanilla.jpg'
import nutmeg from '../../assets/nutmeg.jpg'



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
        <div className="product-categories">
          <div className="cat-card">
              <img src={cinnamon} alt="Cinnamon" />
              <h3>Cinnamon</h3>
              <p>True Ceylon Cinnamon, harvested from our family estate.</p>
          </div>
          <div className="cat-card">
              <img src={pepper} alt="black pepper" />
              <h3>Black Pepper</h3>
              <p>Bold, sun-dried peppercorns with a deep, earthy heat.</p>
          </div>
          <div className="cat-card">
              <img src={cardamom} alt="Cardamom" />
              <h3>Cardamom</h3>
              <p>Green "Queen of Spices," aromatic and hand-selected.</p>
          </div>
          <div className="cat-card">
              <img src={cloves} alt="Cloves" />
              <h3>Cloves</h3>
              <p>Intensely fragrant, high-oil content whole cloves.</p>
          </div>
      </div>
      <div className="product-categories">
          <div className="cat-card">
              <img src={vanilla} alt="Vanilla" />
              <h3>Vanilla</h3>
              <p>True Ceylon Vanilla, harvested from our family estate.</p>
          </div>
          <div className="cat-card">
              <img src={nutmeg} alt="Nutmeg" />
              <h3>Nutmeg</h3>
              <p>True Ceylon Nutmeg.</p>
          </div>
          {/* <div className="cat-card">
              <img src={cardamom} alt="Cardamom" />
              <h3>Cardamom</h3>
              <p>Green "Queen of Spices," aromatic and hand-selected.</p>
          </div>
          <div className="cat-card">
              <img src={cloves} alt="Cloves" />
              <h3>Cloves</h3>
              <p>Intensely fragrant, high-oil content whole cloves.</p>
          </div> */}
      </div>
      {/* <img src={next_icon} alt="" className='next-btn' onClick={slideForward}/>
      <img src={back_icon} alt="" className='back-btn' onClick={slideBackward}/>
      <div className="slider">
        <ul ref={slider}>
            <li>
                <div className="slide">
                    <div className="product-info">
                        <img src={product1} alt="" />
                        <div>
                            <h3> Cinnamon Alba</h3>
                            
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
                            
                        </div>
                        <p>
                            C5 grade true ceylon cinnamon.
                        </p>
                    </div>

                </div>
            </li>
        </ul>
      </div> */}
    </div>
  )
}

export default Products
