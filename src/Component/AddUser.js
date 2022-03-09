import React, { useState } from "react";
import {useNavigate} from 'react-router-dom';

// AddUser component with one arguments addUsers
export const AddUser = ({addUsers}) => {
  // field state have the values of user
  const [field, setfield] = useState({
    Firstname: "",
    Lastname: "",
    Empid: "",
    City: "",
  });
  let navigate = useNavigate();

  //form to add user details
  return (
    <div className="container">
      <h1>Add User</h1>
      <form className='d-flex flex-column m-4 ' onSubmit={async(e)=>{e.preventDefault();
      // passing the value from AddUser to App using addUsers
      await addUsers(field);
       navigate('/');
      }}>
        <div className="m-2 p-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your FirstName"
            value={field.Firstname}
            onChange={(e)=>{setfield({...field,Firstname:e.target.value})}}
            required
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your LastName"
            value={field.Lastname}
            onChange={(e)=>{setfield({...field,Lastname:e.target.value})}}
            required
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="number"
            className="form-control"
            placeholder="Enter your EmpId"
            value={field.Empid}
            onChange={(e)=>{setfield({...field,Empid:e.target.value})}}
            required
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            className="form-control"
            placeholder="Enter your City"
            value={field.City}
            onChange={(e)=>{setfield({...field,City:e.target.value})}}
            required
          />
        </div>
        <div className="d-flex justify-content-center">
          <button
            className="btn btn-primary"
          >
            ADD
          </button>
        </div>
      </form>
    </div>
  );
};
