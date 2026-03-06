import React, { useState } from "react";
import { QRCodeCanvas } from "qrcode.react";

function TrackBooking() {

  const [searchID, setSearchID] = useState("");
  const [booking, setBooking] = useState(null);

  const handleSearch = () => {

    const storedBooking = JSON.parse(localStorage.getItem("finalBooking"));

    if (storedBooking && storedBooking.bookingID === searchID) {
      setBooking(storedBooking);
    } else {
      setBooking("notfound");
    }

  };

  return (

    <div className="container mt-5">

      <h2 className="text-center">Track Your Booking</h2>

      <div className="card p-4 mt-4">

        <input
          className="form-control mb-3"
          placeholder="Enter Booking ID"
          onChange={(e) => setSearchID(e.target.value)}
        />

        <button
          className="btn btn-primary"
          onClick={handleSearch}
        >
          Track Booking
        </button>

      </div>

      {booking && booking !== "notfound" && (

        <div className="card p-4 mt-4">

          <h4>Booking ID: {booking.bookingID}</h4>

          <p>Name: {booking.name}</p>

          <p>Email: {booking.email}</p>

          <p>Event: {booking.event}</p>

          <p>Tickets: {booking.tickets}</p>

          <p>
            <b>Payment Status:</b>{" "}
            <span style={{ color: booking.paymentStatus === "Success" ? "green" : "red" }}>
              {booking.paymentStatus}
            </span>
          </p>

          {/* Message at bottom */}

          {booking.paymentStatus === "Success" && (

<div className="card p-4 mt-3 text-center">

<h4 className="text-success">
🎉 Your ticket is booked successfully!
</h4>

<p><b>Event:</b> {booking.event}</p>
<p><b>Name:</b> {booking.name}</p>
<p><b>Tickets:</b> {booking.tickets}</p>
<p><b>Booking ID:</b> {booking.bookingID}</p>

<h5 className="mt-3">Scan Ticket QR</h5>

<QRCodeCanvas
value={booking.bookingID}
size={150}
/>

</div>

)}

          {booking.paymentStatus === "Failed" && (
            <p className="text-danger mt-3">
              ❌ Oops! Try again after some time.
            </p>
          )}

        </div>

      )}

      {booking === "notfound" && (

        <p className="text-danger text-center mt-4">
          Booking ID not found
        </p>

      )}

    </div>

  );

}

export default TrackBooking;