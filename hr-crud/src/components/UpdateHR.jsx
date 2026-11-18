
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, useNavigate } from "react-router-dom";

function UpdateHR() {
  const { id } = useParams();
  const navigate = useNavigate();

  const [formData, setFormData] = useState({
    name: "",
    email: "",
    city: "",
    phone: ""
  });

  const getSingleHR = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/hrView/${id}`
      );

      setFormData({
        name: response.data.name || "",
        email: response.data.email || "",
        city: response.data.city || "",
        phone: response.data.phone || ""
      });
    } catch (error) {
      console.log(error);
      alert("HR Data Not Found!");
    }
  };

  useEffect(() => {
    getSingleHR();
  }, [id]);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      await axios.put(
        `http://localhost:3000/api/hrUpdate/${id}`,
        formData
      );

      alert("HR Updated Successfully!");
      navigate("/");
    } catch (error) {
      console.log(error);
      alert("HR Update Failed!");
    }
  };

  return (
    <div className="container">
      <h2>Update HR Details</h2>

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

        <button type="submit">Update HR</button>
      </form>
    </div>
  );
}

export default UpdateHR;