import React from "react";
import { Link} from "react-router-dom";
import PreviewIcon from "@mui/icons-material/Preview";
import "../App.css";
import EditIcon from "@mui/icons-material/Edit";
import IconButton from "@mui/material/IconButton";
import DeleteIcon from "@mui/icons-material/Delete";
import { Container, Table } from "react-bootstrap";

//Users component with two arguments from Home component
export const Users = ({ users, delUser }) => {
  //passing users and id from Users to App component by calling delHandler
  const delHandler = (user, id) => {
    console.log(user, id);
    delUser(user, id);
  };

  //displaying  table of users
  return (
    // bootstarp component Container
    <Container>
      {/* bootstap component Table */}
      <Table striped bordered hover variant="dark" responsive>
        <thead>
          <tr className="text-center">
            <th scope="col">#</th>
            <th scope="col">Firstname</th>
            <th scope="col">Lastname</th>
            <th scope="col">EmpID</th>
            <th scope="col">City</th>
            <th scope="col">Action</th>
          </tr>
        </thead>
        <tbody>
          {/* maping the users */}
          {users.map((e, i) => (
            <tr key={i} className="text-center">
              <th scope="row">{i + 1}</th>
              <td>{e.Firstname}</td>
              <td>{e.Lastname}</td>
              <td>{e.Empid}</td>
              <td>{e.City}</td>
              <td>
                {/*create a link to buttons */}
                <Link to={`/view/${e.Empid}`}>
                  <IconButton color="primary" aria-label="Edit">
                    <PreviewIcon />
                  </IconButton>
                </Link>
                <Link to={`/edit/${e.Empid}`}>
                  <IconButton color="warning" aria-label="Edit">
                    <EditIcon />
                  </IconButton>
                </Link>
                <IconButton
                  color="error"
                  aria-label="delete"
                  onClick={() => {
                    delHandler(e, e.Empid);
                  }}
                >
                  <DeleteIcon />
                </IconButton>
              </td>
            </tr>
          ))}
        </tbody>
      </Table>
    </Container>
  );
};
