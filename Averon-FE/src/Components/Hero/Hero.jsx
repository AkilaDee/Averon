import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import vid1 from '../../assets/Vid.mp4'; 
import vid2 from '../../assets/Vid2.mp4'; 
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const Hero = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  const [activeVideo, setActiveVideo] = useState(0);

  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.playbackRate = 0.5;
      videoRef1.current.play().catch(err => console.log("Initial playback failed:", err));
    }
    if (videoRef2.current) {
      videoRef2.current.playbackRate = 0.5;
    }
  }, []);

  const handleVideo1Ended = () => {
    if (videoRef2.current) {
      videoRef2.current.currentTime = 0;
      videoRef2.current.play().then(() => {
        setActiveVideo(1); 
      }).catch(err => console.log("Video 2 transition fail:", err));
    }
  };

  const handleVideo2Ended = () => {
    if (videoRef1.current) {
      videoRef1.current.currentTime = 0;
      videoRef1.current.play().then(() => {
        setActiveVideo(0); 
      }).catch(err => console.log("Video 1 transition fail:", err));
    }
  };

  return (
    <div className="hero-master-container">
      {/* <Helmet>
        <title>Ceylon Cinnamon & Spice Wholesale | Averon Supplies</title>
        <meta
          name="description"
          content="Wholesale importer of single-origin Ceylon cinnamon and Sri Lankan spices, sourced directly from our own estates. Bulk supply, samples and specs available."
        />
        <link rel="canonical" href="https://www.averonsupplies.co.uk/" />
      </Helmet> */}
      <section className="hero-section">
        <div className="video-wrapper">
          <video
            ref={videoRef1}
            src={vid2}
            muted
            playsInline
            preload="none"
            onEnded={handleVideo1Ended}
            className={`hero-video ${activeVideo === 0 ? 'visible' : 'hidden'}`}
          >
            Your browser does not support the video tag.
          </video>

          <video
            ref={videoRef2}
            src={vid1}
            muted
            playsInline
            preload="none"
            onEnded={handleVideo2Ended}
            className={`hero-video ${activeVideo === 1 ? 'visible' : 'hidden'}`}
          >
            Your browser does not support the video tag.
          </video>

          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">
            Welcome to Averon Supplies
          </h1>
          <p className="hero-subtitle">Importer and Distributor of Premium Spices</p>
          
          <div className="hero-btn-group">
            <Link to="/products" className="hero-btn">
              Product Guide
            </Link>
            <Link to="/contact-us" className="hero-btn">
              Enquire Today
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Hero;