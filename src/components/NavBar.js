import React from 'react';
import HobbyCueLogo from '../assets/Hobbycue logo.png'; 
import './NavBar.css'; 

function NavBar() {
  return (
    <nav className="navbar navbar-expand-lg bg-white shadow-sm">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand" href="#">
          <img src={HobbyCueLogo} alt="Hobbycue Logo" style={{ width: '293px', height: '60px' }} />
        </a>

        {/* Navbar Toggler for mobile */}
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarSupportedContent" aria-controls="navbarSupportedContent" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar content */}
        <div className="collapse navbar-collapse" id="navbarSupportedContent">
          {/* Search Bar */}
          <form className="d-flex mx-auto" role="search" style={{ width: '300px' }}>
            <input className="form-control me-0" type="search" placeholder="Search here..." aria-label="Search" />
            <button className="btn btn-purple" type="submit">
              <i className="bi bi-search"></i>
            </button>
          </form>

          {/* Nav items */}
          <ul className="navbar-nav ms-auto mb-2 mb-lg-0 align-items-center">
            {/* Explore Dropdown */}
            <li className="nav-item dropdown">
                <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    <i className="bi bi-compass-fill me-2 purple-icon"></i>Explore
                </a>
                <ul className="dropdown-menu explore-dropdown">
                    <li><a className="dropdown-item" href="#">People - Community</a></li>
                    <li><a className="dropdown-item" href="#">Places - Venues</a></li>
                    <li><a className="dropdown-item" href="#">Programs - Events</a></li>
                    <li><a className="dropdown-item" href="#">Products - Store</a></li>
                    <li><a className="dropdown-item" href="#">Blogs</a></li>
                </ul>
            </li>

            {/* Hobbies Dropdown */}
            <li className="nav-item dropdown mx-lg-2">
              <a className="nav-link dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                <i className="bi bi-star-fill me-2 purple-icon"></i>Hobbies
              </a>
            </li>

            {/* Icons */}
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-bookmark-fill fs-5 purple-icon"></i></a>
            </li>
            <li className="nav-item mx-lg-2">
              <a className="nav-link" href="#"><i className="bi bi-bell-fill fs-5 purple-icon"></i></a>
            </li>
            <li className="nav-item">
              <a className="nav-link" href="#"><i className="bi bi-cart-fill fs-5 purple-icon"></i></a>
            </li>

            {/* Sign In Button */}
            <li className="nav-item ms-lg-3">
              <button className=" btn-outline-purple" type="button">Sign In</button>
            </li>
          </ul>
        </div>

        {/* Mobile Icons - to the right of the logo */}
        <div className="d-lg-none ms-auto d-flex align-items-center">
          {/* Search Icon */}
          <button className="icon-btn mobile-search-btn">
            <i className="bi bi-search"></i>
          </button>
          {/* Bell Icon */}
          <button className="icon-btn ms-2">
            <i className="bi bi-bell-fill purple-icon"></i>
          </button>
          {/* Hamburger */}
          <button className="icon-btn ms-2">
            <i className="bi bi-list"></i>
          </button>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;
