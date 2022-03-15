import React,{useState} from 'react';
import { useParams,useNavigate } from 'react-router-dom';

// Edit component with two arguments users and update
export const Edit = ({users,update}) => {
  // useParams gives the id of user
  const {id} = useParams();
  //filter the user with id to update
  let  user = users.find(e => e.Empid===id);

  const [field, setfield] = useState({
    Firstname: user.Firstname,
    Lastname: user.Lastname,
    Empid: user.Empid,
    City: user.City,
  });
  
  let navigate = useNavigate();
  // form to display the current user values need to update
  return (
    <div className="container">
      <h1>Edit</h1>
      <form className='d-flex flex-column m-2 ' onSubmit={async(e)=>{e.preventDefault();
        user=field;
        await update(user,id);
        navigate('/profile/:id');
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
            disabled
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
            className="btn btn-warning"
          >
            Update Profile
          </button>
        </div>
      </form>
    </div>
  )
}
