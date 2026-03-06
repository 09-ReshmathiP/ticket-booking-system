import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Payment() {

  const navigate = useNavigate();

  const [bookingID, setBookingID] = useState("");

  const handlePayment = () => {

    const booking = JSON.parse(localStorage.getItem("booking"));

    const id = "BK" + Math.floor(Math.random() * 10000);

    const paymentStatus = Math.random() < 0.5 ? "Success" : "Failed";

    const finalBooking = {
      ...booking,
      bookingID: id,
      paymentStatus: paymentStatus
    };

    localStorage.setItem("finalBooking", JSON.stringify(finalBooking));

    setBookingID(id);
  };

  return (
    <div className="container mt-5 text-center">

      <h2>Payment Page</h2>

      {!bookingID && (
        <button
          className="btn btn-success btn-lg"
          onClick={handlePayment}
        >
          Pay Now
        </button>
      )}

      {bookingID && (
        <div className="card p-4 mt-4">

          <h3>Payment ID Generated</h3>

          <h4>{bookingID}</h4>

          <p>Please copy this Booking ID to track your booking.</p>

          <button
            className="btn btn-primary"
            onClick={() => navigate("/track")}
          >
            Go to Track Booking
          </button>

        </div>
      )}

    </div>
  );
}

export default Payment;