import React from "react";

//Setting up the table for employee data using className(s)
function Data(props) {
    return(
        <table className= "table">
            <thead className= "thead-striped">
            <tr>
{/* //Set up columns for Photo,Name, Phone #, Email   */}
        <th scope="col">Photo</th>
            <th scope="col">Name<span onClick={props.handleSort}><i id="name" className={props.class}></i></span></th>
            <th scope="col">Phone<span onClick={props.handleSort}><i id="phone" className={props.class}></i></span></th>
            <th scope="col">Email<span onClick={props.handleSort}><i id="email" className={props.class}></i></span></th>
          </tr>
        </thead>
    
    )
    
}
