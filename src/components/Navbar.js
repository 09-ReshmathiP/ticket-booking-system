import React from "react";
import { Link } from "react-router-dom";

function Navbar() {
  return (
    <nav className="navbar navbar-expand-lg navbar-dark bg-primary">
      <div className="container">

        <Link className="navbar-brand fw-bold" to="/">
          Ticket Booking
        </Link>

        <div className="ms-auto">

          <Link
            to="/"
            className="btn btn-warning me-2 fw-bold"
          >
            <i className="bi bi-house"></i> Home
          </Link>

          <Link
            to="/booking"
            className="btn btn-warning me-2 fw-bold"
          >
            <i className="bi bi-ticket"></i> Book Ticket
          </Link>

          <Link
            to="/track"
            className="btn btn-warning fw-bold"
          >
            <i className="bi bi-search"></i> Track Booking
          </Link>

        </div>

      </div>
    </nav>
  );
}

export default Navbar;