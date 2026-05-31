import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import vid1 from '../../assets/vid.mp4'; 
import vid2 from '../../assets/vid2.mp4'; 
import { Link } from 'react-router-dom';


const Hero = () => {
  const videoRef = useRef(null);
  const playlist = [vid2, vid1];
  const [currentVideoIndex, setCurrentVideoIndex] = useState(0);

  useEffect(() => {
    if (videoRef.current) {
      videoRef.current.playbackRate = 0.5;
      videoRef.current.play().catch(error => {
        console.log("Autoplay context tracking:", error);
      });
    }
  }, [currentVideoIndex]);

  const handleVideoEnded = () => {
    setCurrentVideoIndex((prevIndex) => (prevIndex + 1) % playlist.length);
  };

  return (
    <div className="hero-master-container">
      
      {/* SECTION A: THE VIDEO CANVAS */}
      <section className="hero-section">
        <div className="video-wrapper">
          <video
            ref={videoRef}
            src={playlist[currentVideoIndex]} 
            autoPlay
            muted
            playsInline
            onEnded={handleVideoEnded} 
            className="hero-video"
          >
            Your browser does not support the video tag.
          </video>
          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Welcome to Averon Supplies</h1>
          <p className="hero-subtitle">Importer and Distributor of Quality Ingredients</p>
          
          <div className="hero-btn-group">
            {/* <a href="/products" className="hero-btn">Product Guide</a>
            {/* <a href="#insights" className="hero-btn">Industry Insights</a> */}
            {/* <a href="/contact-us" className="hero-btn">Enquire Today</a>  */}
            <Link to="/products" className="hero-btn">
              Product Guide
            </Link>
            <Link to="/contact-us" className="hero-btn">
              Enquire Today
            </Link>
          </div>
        </div>
      </section>

      {/* SECTION B: THE LOWER CONTENT SPLIT (Matches image_899461.jpg) */}
      <div className="hero-infobar">
        <div className="hero-infobar-inner">
          <h2 className="infobar-title">Trusted Ingredients Supplier for Food Manufacturers</h2>
          {/* <p className="infobar-text">
            For over 35 years Averon has been searching the globe for interesting products, 
            produced by reputable suppliers who value quality and partnership. As a major importer 
            and distributor, we collaborate with our food manufacturing, wholesale, and retail 
            customers, sharing insight, innovation, and ideas and supplying high-quality food 
            ingredients with integrity.
          </p>
          <p className="infobar-text">
            In addition to supplying great products, we believe your ingredients partner should also 
            offer first-class technical support, market insights and ideas, and exceptional service. 
            We look forward to working with you and becoming your ingredients partner.
          </p> */}
        </div>
      </div>

    </div>
  );
};

export default Hero;