
import React, { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

function AddHR() {
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: ""
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://localhost:3000/api/hrCreate",
        formData
      );

      alert("HR Added Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("HR Add Failed!");
    }
  };

  return (
    <div className="container">
      <h2>Add HR Details</h2>

      <form onSubmit={handleSubmit}>
        <input
          type="text"
          name="name"
          placeholder="Enter Name"
          value={formData.name}
          onChange={handleChange}
          required
        />

        <input
          type="email"
          name="email"
          placeholder="Enter Email"
          value={formData.email}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="city"
          placeholder="Enter City"
          value={formData.city}
          onChange={handleChange}
          required
        />

        <input
          type="text"
          name="phone"
          placeholder="Enter Phone"
          value={formData.phone}
          onChange={handleChange}
          required
        />

        <button type="submit">Add HR</button>
      </form>
    </div>
  );
}

export default AddHR;