import React from "react";
import 'bootstrap/dist/css/bootstrap.css';
import './table.css';


//Setting up the table for employee data using className(s)
function Data(props) {
    return(
        <table className= "table">
            <thead className= "thead-striped">
            <tr>
{/* //Set up columns for Photo,Name, Phone #, Email & city   */}
        <th scope="col">Photo</th>
            <th onClick={() =>{props.handleSort(props.class)}}> Name <i className="fas fa-sort"></i><i id="name" class = "name" className={props.class}></i></th>
            <th scope="col">Phone<span onClick={props.handleSort}><i id="phone" className={props.class}></i></span></th>
            <th scope="col">Email<span onClick={props.handleSort}><i id="email" className={props.class}></i></span></th>
            <th scope="col">City<span onClick={props.handleSort}><i id="city" className={props.class}></i></span></th>
          </tr>
        </thead>
        <tbody>
        {props.users.map(user => (
          <tr key={user.email}>
            <td><img src={user.picture.medium} alt="employeePhoto" /></td>
            <td>{user.name.first} {user.name.last}</td>
            <td>{user.phone}</td>
            <td>{user.email}</td>
            <td>{user.location.city}</td>
          </tr>
        ))}
        </tbody>
      </table>
    )
}
//export 
export default Data;

    


