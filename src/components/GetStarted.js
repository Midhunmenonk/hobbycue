
import React, { useEffect } from 'react';
import GetStartedIllustration from '../assets/get-started-illustration.png';
import './GetStarted.css';

function GetStarted() {
  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: 'smooth'
    });
  };

  useEffect(() => {
    const handleKeyDown = (event) => {
      if (event.ctrlKey && event.key === 'Home') {
        event.preventDefault();
        handleScrollToTop();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => {
      window.removeEventListener('keydown', handleKeyDown);
    };
  }, []);

  return (
    <section className="get-started-section">
      <div className="container py-5">
        <div className="get-started-content">
          <h2 className="get-started-title">
            Your <span className="fw-bold fst-italic">Hobby</span>, Your <span className="fw-bold fst-italic text-blue">Community</span>...
          </h2>
          <button className=" btn-get-started mt-4">Get started</button>
        </div>
        
        <img 
          src={GetStartedIllustration} 
          alt="People enjoying hobbies" 
          className="img-fluid get-started-illustration mt-5" 
        />
        
        {/* --- UPDATED "Go to Top" elements --- */}
        <div className="go-to-top-wrapper d-none d-lg-block"> {/* Wrapper for positioning */}
            
            <button 
                className="btn-go-to-top" // Icon-only button
                onClick={handleScrollToTop}
                aria-label="Go to top"
            >
                <i className="bi bi-arrow-up"></i>
            </button>
            <span className="go-to-top-text">Go to top (Ctrl+Home)</span>
        </div>
        {/* --- END OF UPDATED SECTION --- */}
      </div>
    </section>
  );
}

export default GetStarted;