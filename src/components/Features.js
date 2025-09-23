import React from 'react';
import './Features.css'; 

function Features() {
  return (
    <section className="features-section">
      <div className="container">
        <div className="row">
          {/* People Card */}
          <div className="col-lg-6 mb-4">
            <div className="feature-card">
              <div className="card-title-group">
                <i className="bi bi-people-fill icon-people"></i>
                <h5 className="card-title fw-bold">People</h5>
              </div>
              <p className="card-text">
                Find a teacher, coach, or expert for your hobby interest in your locality. Find a partner, teammate, accompanist or collaborator.
              </p>
              <button className="btn btn-outline-feature">Connect</button>
            </div>
          </div>

          {/* Place Card */}
          <div className="col-lg-6 mb-4">
            <div className="feature-card">
              <div className="card-title-group">
                <i className="bi bi-geo-alt-fill icon-place"></i>
                <h5 className="card-title fw-bold">Place</h5>
              </div>
              <p className="card-text">
                Find a class, school, playground, auditorium, studio, shop or an event venue. Book a slot at venues that allow booking through hobbycue.
              </p>
              <button className="btn btn-outline-feature">Meet up</button>
            </div>
          </div>

          {/* Product Card */}
          <div className="col-lg-6 mb-4">
            <div className="feature-card">
              <div className="card-title-group">
                <i className="bi bi-basket-fill icon-product"></i>
                <h5 className="card-title fw-bold">Product</h5>
              </div>
              <p className="card-text">
                Find equipment or supplies required for your hobby. Buy, rent or borrow from shops, online stores or from community members.
              </p>
              <button className="btn btn-outline-feature">Get it</button>
            </div>
          </div>

          {/* Program Card */}
          <div className="col-lg-6 mb-4">
            <div className="feature-card">
              <div className="card-title-group">
                <i className="bi bi-calendar-check-fill icon-program"></i>
                <h5 className="card-title fw-bold">Program</h5>
              </div>
              <p className="card-text">
                Find events, meetups and workshops related to your hobby. Register or buy tickets online.
              </p>
              <button className="btn btn-outline-feature">Attend</button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Features;