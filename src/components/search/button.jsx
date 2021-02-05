import React from "react";
import "./search.css";

function Button(props) {
  return (
    <nav className="">

        <input
        onChange={props.handleChange}
        className="form-control mr-sm-2"
        type="text"
        placeholder="Search for Employee"
        aria-label="Search"
        name="search"
        value={props.search}
        />
        
    </nav>
  )
}

//Export
export default Button;