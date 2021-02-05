//This file will function to dynamically render the HTML on the page
//Need to import React and css for the header
import React from "react"
import "./header.css"

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">Employee Directory</h1>
        <p className="lead">View All Employees<br></br>Sort Employees alphebetically by First Name<br></br>or search for specific employees by name</p>
      </div>
    </div>
  )
}

export default Header;