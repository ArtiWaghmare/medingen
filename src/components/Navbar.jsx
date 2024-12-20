
import React from "react";
import "bootstrap/dist/css/bootstrap.min.css";
import "bootstrap-icons/font/bootstrap-icons.css";
import "bootstrap/dist/js/bootstrap.bundle.min.js";  
import "./Nav.css";

const Navbar = () => {
  return (
    <nav className="navbar navbar-expand-lg navbar-light bg-transparent fixed-top shadow-sm p-3">
      <div className="container-fluid">
        
        <a className="" href="#">
          <img src="./images/navlogo.png" alt="Logo" className="navbar-logo" />
        </a>
        <span className="medigen-text">Medigen</span>

        
        <button
          className="navbar-toggler ms-auto"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>

        {/* Navbar Links */}
        <div className="collapse navbar-collapse" id="navbarNav">
          <ul className="navbar-nav mx-auto">
            {/* Home */}
            <li className="nav-item">
              <a className="nav-link fw-semibold mx-3 d-flex align-items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <path d="M8.354 1.146a.5.5 0 0 0-.708 0l-6 6a.5.5 0 1 0 .708.708L2 7.207V13.5a1.5 1.5 0 0 0 1.5 1.5h9a1.5 1.5 0 0 0 1.5-1.5V7.207l.646.647a.5.5 0 0 0 .708-.708l-6-6z" />
                  <path d="M13 2.5V6l-5-5-5 5V2.5A1.5 1.5 0 0 1 4.5 1h7A1.5 1.5 0 0 1 13 2.5z" />
                </svg>
                Home
              </a>
            </li>
            {/* Offer */}
            <li className="nav-item">
              <a className="nav-link fw-semibold mx-3 d-flex align-items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="28"
                  height="28"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="#8a8a8a"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="lucide lucide-badge-percent me-2"
                >
                  <path d="M3.85 8.62a4 4 0 0 1 4.78-4.77 4 4 0 0 1 6.74 0 4 4 0 0 1 4.78 4.78 4 4 0 0 1 0 6.74 4 4 0 0 1-4.77 4.78 4 4 0 0 1-6.75 0 4 4 0 0 1-4.78-4.77 4 4 0 0 1 0-6.76Z" />
                  <path d="m15 9-6 6" />
                  <path d="M9 9h.01" />
                  <path d="M15 15h.01" />
                </svg>
                Offer
              </a>
            </li>
            {/* Notifications */}
            <li className="nav-item">
              <a className="nav-link fw-semibold mx-3 d-flex align-items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <path d="M8 16a2 2 0 0 0 2-2H6a2 2 0 0 0 2 2zm.7-14.1a1 1 0 1 0-1.4 0A7 7 0 0 0 2 8c0 1.1-.4 2.4-.9 3.4A.5.5 0 0 0 1 12h14a.5.5 0 0 0 .4-.6A7.018 7.018 0 0 1 14 8 7 7 0 0 0 8.7 1.9z" />
                </svg>
                Notifications
              </a>
            </li>
            {/* Profile */}
            <li className="nav-item">
              <a className="nav-link fw-semibold mx-3 d-flex align-items-center" href="#">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="24"
                  height="24"
                  viewBox="0 0 16 16"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="1"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  className="me-2"
                >
                  <path d="M8 8a3 3 0 1 0 0-6 3 3 0 0 0 0 6z" />
                  <path d="M14 13.5c0-2.5-2-4.5-6-4.5s-6 2-6 4.5" />
                </svg>
                Profile
              </a>
            </li>
          </ul>
          {/* Shopping Cart Icon */}
          <div className="d-flex align-items-center">
            <a href="#" className="text-dark fs-5">
              <i className="bi bi-cart"></i>
            </a>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
