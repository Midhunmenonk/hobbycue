
import React from 'react';
import './Footer.css'; 

function Footer() {
  const footerSections = [
    {
      title: 'Hobbycue',
      links: [
        { text: 'About Us', href: '#' },
        { text: 'Our Services', href: '#' },
        { text: 'Work with Us', href: '#' },
        { text: 'FAQ', href: '#' },
        { text: 'Contact Us', href: '#' },
      ],
    },
    {
      title: 'How Do I',
      links: [
        { text: 'Sign Up', href: '#' },
        { text: 'Add a Listing', href: '#' },
        { text: 'Claim Listing', href: '#' },
        { text: 'Post a Query', href: '#' },
        { text: 'Add a Blog Post', href: '#' },
        { text: 'Other Queries', href: '#' },
      ],
    },
    {
      title: 'Quick Links',
      links: [
        { text: 'Listings', href: '#' },
        { text: 'Blog Posts', href: '#' },
        { text: 'Shop / Store', href: '#' },
        { text: 'Community', href: '#' },
      ],
    },
  ];

  return (
    <footer className="main-footer">
      <div className="container py-5">
        <div className="row">
          {/* Section Columns - Visible on desktop, collapsible on mobile */}
          {footerSections.map((section, index) => (
            <div key={index} className="col-lg-2 col-md-6 col-12 mb-4 mb-lg-0">
              {/* Desktop View: Always visible title and links */}
              <h5 className="footer-title d-none d-lg-block">{section.title}</h5>
              <ul className="list-unstyled d-none d-lg-block">
                {section.links.map((link, linkIndex) => (
                  <li key={linkIndex}><a href={link.href} className="footer-link">{link.text}</a></li>
                ))}
              </ul>

              {/* Mobile View: Collapsible header and content */}
              <div className="d-lg-none">
                <div
                  className="footer-mobile-toggle d-flex justify-content-between align-items-center"
                  data-bs-toggle="collapse"
                  data-bs-target={`#footerCollapse${index}`}
                  aria-expanded="false"
                  aria-controls={`footerCollapse${index}`}
                >
                  <h5 className="footer-title m-0">{section.title}</h5>
                  <i className="bi bi-chevron-up toggle-icon"></i>
                </div>
                <div className="collapse" id={`footerCollapse${index}`}>
                  <ul className="list-unstyled mt-3">
                    {section.links.map((link, linkIndex) => (
                      <li key={linkIndex}><a href={link.href} className="footer-link">{link.text}</a></li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          ))}

          {/* Social Media & Invite Friends Column */}
          <div className="col-lg-4 col-md-6 col-12">
            {/* Social Media - Desktop */}
            <h5 className="footer-title d-none d-lg-block mb-3">Social Media</h5>
            <div className="social-media-icons d-none d-lg-flex mb-4">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-pinterest"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-google"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-telegram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-envelope-fill"></i></a> {/* Assuming envelope for mail */}
            </div>

            {/* Social Media - Mobile (always visible, not collapsible based on image) */}
            <h5 className="footer-title d-lg-none mt-4 mb-3">Social Media</h5>
            <div className="social-media-icons d-flex d-lg-none justify-content-start flex-wrap mb-4">
              <a href="#" className="social-icon"><i className="bi bi-facebook"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-twitter"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-instagram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-pinterest"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-google"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-youtube"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-telegram"></i></a>
              <a href="#" className="social-icon"><i className="bi bi-envelope-fill"></i></a>
            </div>

            {/* Invite Friends Section (always visible, desktop & mobile) */}
            <h5 className="footer-title mb-3">Invite Friends</h5>
            <div className="input-group invite-friends-group">
              <input type="email" className="form-control" placeholder="Email ID" aria-label="Email ID" />
              <button className="btn btn-invite" type="button">Invite</button>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright Bar */}
      <div className="copyright-bar py-3 text-center">
        <p className="m-0">&copy; Purple Cues Private Limited</p>
      </div>
    </footer>
  );
}

export default Footer;