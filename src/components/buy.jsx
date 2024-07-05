import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { useLocation } from "react-router-dom";

const Buy = () => {
  const location = useLocation();
  const product = location.state;

  // Function to handle form submission
  const handleSubmit = (event) => {
    event.preventDefault();
    const form = event.target;

    if (form.checkValidity()) {
      alert('The order has been placed. Thank you for shopping with us! Welcome back.');
      form.reset();
    } else {
      form.reportValidity();
    }
  };

  useEffect(() => {
    // Add event listener when component mounts
    const form = document.getElementById('salesForm');
    form.addEventListener('submit', handleSubmit);

    // Clean up event listener when component unmounts
    return () => {
      form.removeEventListener('submit', handleSubmit);
    };
  }, []); // Empty dependency array ensures this effect runs only once

  return (
    <>
      <form id="salesForm">
        <div className="mb-3">
          <label htmlFor="exampleInputEmail1" className="form-label">Email address</label>
          <input type="email" className="form-control" id="exampleInputEmail1" aria-describedby="emailHelp" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPassword1" className="form-label">Password</label>
          <input type="password" className="form-control" id="exampleInputPassword1" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputText1" className="form-label">Location</label>
          <input type="text" className="form-control" id="exampleInputText1" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputName1" className="form-label">Full Name</label>
          <input type="text" className="form-control" id="exampleInputName1" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputPhone1" className="form-label">Phone Number</label>
          <input type="tel" className="form-control" id="exampleInputPhone1" required />
        </div>
        <div className="mb-3">
          <label htmlFor="exampleInputAddress1" className="form-label">Address</label>
          <textarea className="form-control" id="exampleInputAddress1" rows="3" required></textarea>
        </div>

        <button type="submit" className="btn btn-primary" style={{marginRight:"10em"}}>Submit</button>
        <Link to="/" className="btn btn-primary ml-3">Home</Link>
      </form>
    </>
  );
};

export default Buy;
