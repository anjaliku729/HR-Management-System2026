
import React, { useEffect, useState } from "react";
import axios from "axios";
import { useParams, Link } from "react-router-dom";

function ViewHR() {
  const { id } = useParams();

  const [hr, setHr] = useState(null);

  const getSingleHR = async () => {
    try {
      const response = await axios.get(
        `http://localhost:3000/api/hrView/${id}`
      );

      setHr(response.data);
    } catch (error) {
      console.log(error);
      alert("HR Details Not Found!");
    }
  };

  useEffect(() => {
    getSingleHR();
  }, [id]);

  if (!hr) {
    return <h3 className="loading">Loading HR Details...</h3>;
  }

  return (
    <div className="container">
      <h2>View HR Details</h2>

      <div className="details">
        <h3>Name: {hr.name}</h3>
        <p>Email: {hr.email}</p>
        <p>City: {hr.city}</p>
        <p>Phone: {hr.phone}</p>

        <Link to="/">
          <button>Back</button>
        </Link>
      </div>
    </div>
  );
}

export default ViewHR;