import React from "react";
import "./search.css";

function Button(props) {
  return (

    <div className = "search">
  <nav className="">
        <input
        onChange={props.handleChange}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search for Employee by First or Last Name"
        aria-label="Search"
        name="search"
        value={props.search}
        />
        
    </nav>
  </div>
  )
}

//Export
export default Button;