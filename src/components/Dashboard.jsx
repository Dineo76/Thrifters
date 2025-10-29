import React, { useState } from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";


export function Dashboard() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState([]);
  
    return (
      <>
        {/* Navbar */}
        <nav className="navbar navbar-expand-lg navbar-dark bg-dark sticky-top">
          <div className="container">
            <a className="navbar-brand fw-bold" href="#">Thrifter</a>
  
            <button
              className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
              aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
  
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav ms-auto align-items-center">
                {["Home", "Men", "Women"].map((item) => (
                  <li className="nav-item" key={item}><a className="nav-link" href="#">
                      {item}
                    </a>
                  </li>
                ))}
  
                {/* Cart */}
                <li className="nav-item ms-3">
                  <a className="nav-link position-relative d-flex align-items-center" href="#">
                    Cart
                    {cart.length > 0 && (
                      <span className="badge bg-danger ms-1">{cart.length}</span>
                    )}
                  </a>
                </li>
  
                {/* User Icon */}
                <li className="nav-item ms-3">
                  <a className="nav-link d-flex align-items-center" href="#">
                    <i className="bi bi-person-circle fs-5 text-white"></i>
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </nav>
  
        <h1 style={{ textAlign: "center", marginTop: "20px" }}>🛒 Welcome to Thrifters</h1>
  
        {/* Hero Section */}
        <section className="hero text-center py-5 border-bottom">
          <div className="container">
            <h1 className="display-4 fw-bold">Love it... Click it</h1>
            <p className="lead mb-4">Shop the latest trends 🛍️</p>
          </div>
        </section>
  
        {/* Carousel */}
        <div id="mainCarousel" className="carousel slide" data-bs-ride="carousel">
          <div className="carousel-indicators">
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="0"
            className="active" aria-current="true" aria-label="Slide 1"></button>
  
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="1" 
            aria-label="Slide 2"></button>
  
            <button type="button" data-bs-target="#mainCarousel" data-bs-slide-to="2" 
            aria-label="Slide 3"></button>
          </div>
  
          <div className="carousel-inner">
            <div className="carousel-item active">
              <img src="https://images.pexels.com/photos/914668/pexels-photo-914668.jpeg" className="d-block w-100"
                alt="Fashion 1" style={{ height: "500px", objectFit: "cover" }}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Latest Women's Collection</h5>
                <p>Explore trendy styles</p>
              </div>
            </div>
  
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/2065203/pexels-photo-2065203.jpeg" className="d-block w-100" alt="Fashion 2"
                style={{ height: "500px", objectFit: "cover" }}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Women’s Streetwear</h5>
                <p>Find your next favorite look</p>
              </div>
            </div>
  
            <div className="carousel-item">
              <img src="https://images.pexels.com/photos/3812039/pexels-photo-3812039.jpeg" className="d-block w-100" alt="Fashion 3"
                style={{ height: "500px", objectFit: "cover" }}/>
              <div className="carousel-caption d-none d-md-block">
                <h5>Accessories for Every Occasion</h5>
                <p>Complete your look</p>
              </div>
            </div>
          </div>
  
          <button
            className="carousel-control-prev" type="button" data-bs-target="#mainCarousel" data-bs-slide="prev">
            <span className="carousel-control-prev-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Previous</span>
          </button>
  
          <button
            className="carousel-control-next" type="button" data-bs-target="#mainCarousel" data-bs-slide="next">
            <span className="carousel-control-next-icon" aria-hidden="true"></span>
            <span className="visually-hidden">Next</span>
          </button>
        </div>
      </>
    );
  }
  