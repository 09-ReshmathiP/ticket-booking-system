import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

function Booking() {

  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [event, setEvent] = useState("");
  const [tickets, setTickets] = useState("");
  const [price, setPrice] = useState(0);
  const [image, setImage] = useState("");

  const handleEventChange = (e) => {

const selectedEvent = e.target.value;
setEvent(selectedEvent);

if(selectedEvent === "Music Concert"){
setPrice(500);
setImage("https://images.unsplash.com/photo-1501386761578-eac5c94b800a");
}

else if(selectedEvent === "Movie Premiere"){
setPrice(300);
setImage("https://images.unsplash.com/photo-1489599849927-2ee91cede3ba");
}

else if(selectedEvent === "Tech Conference"){
setPrice(700);
setImage("https://images.unsplash.com/photo-1551836022-d5d88e9218df");
}

else if(selectedEvent === "Stand-up Comedy Show"){
setPrice(400);
setImage("https://images.unsplash.com/photo-1527224538127-2104bb71c51b");
}
else if(selectedEvent === "Sports Match"){
setPrice(800);
setImage("https://images.unsplash.com/photo-1461896836934-ffe607ba8211");
}
else if(selectedEvent === "Art Exhibition"){
setPrice(200);
setImage("https://images.unsplash.com/photo-1531058020387-3be344556be6");
}

else if(selectedEvent === "Food Festival"){
setPrice(350);
setImage("https://images.unsplash.com/photo-1504674900247-0877df9cc836");
}

else if(selectedEvent === "College Cultural Fest"){
setPrice(250);
setImage("https://images.unsplash.com/photo-1492684223066-81342ee5ff30");
}

else if(selectedEvent === "Dance Competition"){
setPrice(300);
setImage("https://images.unsplash.com/photo-1515169067865-5387ec356754");
}

else if(selectedEvent === "Startup Summit"){
setPrice(600);
setImage("https://images.unsplash.com/photo-1559136555-9303baea8ebd");
}

else{
setPrice(0);
setImage("");
}

};
  const handleSubmit = () => {

    const bookingData = {
      name,
      email,
      event,
      tickets,
      price
    };

    localStorage.setItem("booking", JSON.stringify(bookingData));

    navigate("/payment");
  };

  return (

    <div className="container mt-5">

      <h2 className="text-center mb-4">Book Your Ticket</h2>

      <div className="card p-4 shadow">
       

        <input
          className="form-control mb-3"
          placeholder="Enter Name"
          onChange={(e)=>setName(e.target.value)}
        />


        <input
          className="form-control mb-3"
          placeholder="Enter Email"
          onChange={(e)=>setEmail(e.target.value)}
        />
        

        <select
          className="form-control mb-3"
          onChange={handleEventChange}
        >

          <option>Select Event</option>
          <option>Music Concert</option>
          <option>Movie Premiere</option>
          <option>Tech Conference</option>
          <option>Stand-up Comedy Show</option>
          <option>Sports Match</option>
          <option>Art Exhibition</option>
          <option>Food Festival</option>
          <option>College Cultural Fest</option>
          <option>Dance Competition</option>
          <option>Startup Summit</option>

        </select>

        {image && (
          <img
            src={image}
            alt="event"
            style={{
              width:"100%",
              height:"200px",
              objectFit:"cover",
              borderRadius:"10px",
              marginBottom:"15px"
            }}
          />
        )}

        {price > 0 && (
          <p><b>Ticket Price:</b> ₹{price}</p>
        )}

        <input
          className="form-control mb-3"
          placeholder="Number of Tickets"
          type="number"
          onChange={(e)=>setTickets(e.target.value)}
        />

        {tickets > 0 && price > 0 && (
          <p><b>Total Price:</b> ₹{tickets * price}</p>
        )}

        <button
          className="btn btn-primary"
          onClick={handleSubmit}
        >
          Proceed to Payment
        </button>

      </div>

    </div>

  );
}

export default Booking;