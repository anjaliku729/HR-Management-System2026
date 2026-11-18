
import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

function DisplayHR() {
  const [hrs, setHrs] = useState([]);

  const getHR = async () => {
    try {
      const response = await axios.get(
        "http://localhost:3000/api/hrDisplay"
      );

      setHrs(response.data);
    } catch (error) {
      console.log(error);
      alert("HR Data Fetch Failed!");
    }
  };

  useEffect(() => {
    getHR();
  }, []);

  const deleteHR = async (id) => {
    const confirmDelete = window.confirm(
      "Are you sure you want to delete this HR?"
    );

    if (!confirmDelete) return;

    try {
      await axios.delete(
        `http://localhost:3000/api/hrDelete/${id}`
      );

      alert("HR Deleted Successfully!");
      getHR();
    } catch (error) {
      console.log(error);
      alert("Delete Failed!");
    }
  };

  return (
    <div className="container">
      <h2>Display HR Details</h2>

      <Link to="/add">
        <button className="add-btn">Add New HR</button>
      </Link>

      <div className="table-container">
        <table>
          <thead>
            <tr>
              <th>S.No</th>
              <th>Name</th>
              <th>Email</th>
              <th>City</th>
              <th>Phone</th>
              <th>Action</th>
            </tr>
          </thead>

          <tbody>
            {hrs.length > 0 ? (
              hrs.map((hr, index) => (
                <tr key={hr._id}>
                  <td>{index + 1}</td>
                  <td>{hr.name}</td>
                  <td>{hr.email}</td>
                  <td>{hr.city}</td>
                  <td>{hr.phone}</td>

                  <td>
                    <Link to={`/view/${hr._id}`}>
                      <button className="view-btn">View</button>
                    </Link>

                    <Link to={`/update/${hr._id}`}>
                      <button className="update-btn">Update</button>
                    </Link>

                    <button
                      className="delete-btn"
                      onClick={() => deleteHR(hr._id)}
                    >
                      Delete
                    </button>
                  </td>
                </tr>
              ))
            ) : (
              <tr>
                <td colSpan="6">No HR Records Found</td>
              </tr>
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
}

export default DisplayHR;