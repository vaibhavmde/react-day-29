import React, { useState } from "react";

export const AddUser = () => {
  const [field, setfield] = useState({
    Firstname: "",
    Lastname: "",
    Empid: "",
    City: "",
  });
  
  return (
    <div className="d-flex justify-content-center container p-1">
      <form onSubmit={(e)=>{e.preventDefault();
       const arr=[];
       arr.push({...field});
       console.log(arr);    
      }}>
  
        <div className="m-2 p-2">
          <input
            type="text"
            className="field-control-sm"
            placeholder="Enter your FirstName"
            value={field.Firstname}
            onChange={(e)=>{setfield({...field,Firstname:e.target.value})}}
            required
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            className="field-control-sm"
            placeholder="Enter your LastName"
            value={field.Lastname}
            onChange={(e)=>{setfield({...field,Lastname:e.target.value})}}
            required
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="number"
            className="field-control-sm"
            placeholder="Enter your EmpId"
            value={field.Empid}
            onChange={(e)=>{setfield({...field,Empid:e.target.value})}}
            required
          />
        </div>
        <div className="m-2 p-2">
          <input
            type="text"
            className="field-control-sm"
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
            Submit
          </button>
        </div>
      </form>
    </div>
  );
};
