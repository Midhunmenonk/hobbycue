import React from 'react';
import HobbyIllustration from '../assets/home image.png';
import './HomeScreen.css';

function HomeScreen() {
  return (
    // This container is now the positioning context for its children
    <div className="home-screen-container">
      {/* Left Column: Text */}
      <div className="left-column-text">
        <header className="mb-4">
          <h1 className="fw-bold">
            Explore your <span className="text-blue">hobby</span> or <span className="text-purple">passion</span>
          </h1>
        </header>
        <p>
          Sign-in to interact with a community of fellow hobbyists and an eco-system of experts, teachers, suppliers, classes, workshops, and places to practice, participate or perform. Your hobby may be about visual or performing arts, sports, games, gardening, model making, cooking, indoor or outdoor activities…
        </p>
        <p className="mt-4">
          If you are an expert or a seller, you can Add your Listing and promote yourself, your students, products, services or events. Hop on your hobbyhorse and enjoy the ride.
        </p>
      </div>

      {/* Left Column: Illustration */}
      <img src={HobbyIllustration} alt="People with hobbies" className="left-column-illustration" />

      {/* Right Column: Sign In / Join In Form */}
      <div className="right-column-auth">
        <div className="auth-tabs ">
          <a href="#" className="auth-tab active">Sign In</a>
          <a href="#" className="auth-tab">Join In</a>
        </div>
        
        <div className="social-login">
          <button className="btn btn-outline-secondary mb-2 d-flex align-items-center justify-content-center">
            <img
              src="https://img.icons8.com/?size=100&id=17949&format=png&color=000000"
              alt="Google logo"
              width="20"
              height="20"
            /> Continue with Google
          </button>
          <button className="btn btn-outline-secondary w-100 d-flex align-items-center justify-content-center">
            <i className="bi bi-facebook me-2"></i> Continue with Facebook
          </button>
        </div>

        <div className="separator">
          <span style={{ color: "#000" }}>Or connect with</span>
        </div>
        
        <form>
          <div className="mb-3">
            <input type="email" className="form-control" placeholder="Email" />
          </div>
          <div className="mb-3 password-wrapper">
            <input type="password" className="form-control" placeholder="Password" />
            <i className="bi bi-eye-fill password-icon"></i>
          </div>
          <div className="d-flex justify-content-between align-items-center mb-3">
            <div>
              <input type="checkbox" className="form-check-input" id="rememberMe" />
              <label className="form-check-label ms-2" htmlFor="rememberMe">Remember me</label>
            </div>
            <a href="#" className="forgot-password-link">
              <i className="bi bi-lock-fill me-1"></i> Forgot password?
            </a>
          </div>
          <button type="submit" className=" btn-continue w-100">Continue</button>
        </form>
      </div>
    </div>
  );
}

export default HomeScreen;