import React from "react";
import { useParams } from "react-router-dom";

// View component
export const View = ({ users }) => {
  const { id } = useParams();
  let res = users.find((e) => e.Empid === id);

  // displaying the user details
  return (
    <div className="card">
      {
        <ul className="list-group text-start" id="list">
          <li className="list-group-item">Employee ID: {`${res.Empid}`}</li>
          <li className="list-group-item">Firstname: {`${res.Firstname}`}</li>
          <li className="list-group-item">Lastname: {`${res.Lastname}`}</li>
          <li className="list-group-item">City: {`${res.City}`}</li>
        </ul>
      }
    </div>
  );
};
