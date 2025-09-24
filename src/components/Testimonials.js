import React from 'react';
import './Testimonials.css'; 
import testimonialProfilePic from '../assets/shubha-nagarajan.png'; 

function Testimonials() {
  return (
    <section className="testimonials-section">
      <div className="container testimonials-card">
        <div className="d-flex align-items-center mb-4">
          <i className="bi bi-quote quote-icon me-3"></i>
          <h2 className="testimonials-title m-0">Testimonials</h2>
        </div>
        <p className="testimonial-text mb-4">
          In a fast growing and ever changing city like Bangalore, it sometimes becomes very difficult to find or connect with like
          minded people. Websites like hobbycue.com is a great service which helps me get in touch with, communicate, connect, and
          exchange ideas with other dancers. It also provides the extra benefit of finding products and services that I can avail, which I
          can be assured is going to be of great quality as it comes recommended by people of the hobbycue community. To have
          discussions, to get visibility, and to be able to safely explore various hobbies and activities in my city, all under one roof, is an
          excellent idea and I highly recommend it.
        </p>

        <div className="d-flex flex-column flex-lg-row justify-content-between align-items-center testimonial-bottom-row">
          {/* Audio Player */}
          <div className="audio-player d-flex align-items-center mb-3 mb-lg-0">
            <button className="play-button me-3">
              <i className="bi bi-play-fill"></i>
            </button>
            <div className="progress-bar-container flex-grow-1 mx-3">
              <div className="progress-bar-fill" style={{ width: '0%' }}></div> {/* Dynamic width for progress */}
            </div>
            <span className="audio-time me-3">0:00</span>
            <div className="profile-pic-small-wrapper d-none d-lg-block"> {/* Hidden on mobile, shown on desktop */}
                <img src={testimonialProfilePic} alt="Shubha Nagarajan" className="profile-pic-small" />
            </div>
          </div>

          {/* User Profile Info */}
          <div className="profile-info d-flex align-items-center">
            <div className="profile-pic-large-wrapper me-3">
                <img src={testimonialProfilePic} alt="Shubha Nagarajan" className="profile-pic-large" />
            </div>
            <div>
              <h3 className="profile-name m-0">Shubha Nagarajan</h3>
              <p className="profile-role m-0">Classical Dancer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Testimonials;