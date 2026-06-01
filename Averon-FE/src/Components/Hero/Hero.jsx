import React, { useEffect, useRef, useState } from 'react';
import './Hero.css';
import vid1 from '../../assets/vid.mp4'; 
import vid2 from '../../assets/vid2.mp4'; 
import { Link } from 'react-router-dom';

const Hero = () => {
  const videoRef1 = useRef(null);
  const videoRef2 = useRef(null);
  
  // 0 = vid2 (Active first), 1 = vid1
  const [activeVideo, setActiveVideo] = useState(0);

  // Set playback speed and kick off the initial active video immediately
  useEffect(() => {
    if (videoRef1.current) {
      videoRef1.current.playbackRate = 0.5;
      videoRef1.current.play().catch(err => console.log("Initial playback failed:", err));
    }
    if (videoRef2.current) {
      videoRef2.current.playbackRate = 0.5;
    }
  }, []);

  // When Video 1 (vid2) finishes playing
  const handleVideo1Ended = () => {
    if (videoRef2.current) {
      videoRef2.current.currentTime = 0;
      // Start playing the background video FIRST before changing state visibility
      videoRef2.current.play().then(() => {
        setActiveVideo(1); 
      }).catch(err => console.log("Video 2 transition fail:", err));
    }
  };

  // When Video 2 (vid1) finishes playing
  const handleVideo2Ended = () => {
    if (videoRef1.current) {
      videoRef1.current.currentTime = 0;
      // Start playing the background video FIRST before changing state visibility
      videoRef1.current.play().then(() => {
        setActiveVideo(0); 
      }).catch(err => console.log("Video 1 transition fail:", err));
    }
  };

  return (
    <div className="hero-master-container">
      
      {/* SECTION A: THE VIDEO CANVAS */}
      <section className="hero-section">
        <div className="video-wrapper">
          
          {/* VIDEO ELEMENT 1 (vid2) */}
          <video
            ref={videoRef1}
            src={vid2} 
            muted
            playsInline
            onEnded={handleVideo1Ended} 
            className={`hero-video ${activeVideo === 0 ? 'visible' : 'hidden'}`}
          >
            Your browser does not support the video tag.
          </video>

          {/* VIDEO ELEMENT 2 (vid1) */}
          <video
            ref={videoRef2}
            src={vid1} 
            muted
            playsInline
            onEnded={handleVideo2Ended} 
            className={`hero-video ${activeVideo === 1 ? 'visible' : 'hidden'}`}
          >
            Your browser does not support the video tag.
          </video>

          <div className="hero-overlay"></div>
        </div>

        <div className="hero-content">
          <h1 className="hero-title">Welcome to Averon Supplies</h1>
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

      {/* SECTION B: THE LOWER CONTENT SPLIT */}
      <div className="hero-infobar">
        <div className="hero-infobar-inner">
          <h2 className="infobar-title">Single-Origin, Premium Grade Ceylon Spices</h2>
        </div>
      </div>

    </div>
  );
};

export default Hero;