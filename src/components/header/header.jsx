//This file will function to dynamically render the HTML on the page
//Need to import React and css for the header
import React from "react"
import "./header.css"

function Header() {
  return (
    <div className="jumbotron jumbotron-fluid header">
      <div className="container">
        <h1 className="display-4">CodeCo Staff Directory</h1>
        <p className="lead">Search for a Staff Member by First or Last Name<br></br>Or Sort Staff Alphebetically<br></br></p>
      </div>
    </div>
  )
}

export default Header;