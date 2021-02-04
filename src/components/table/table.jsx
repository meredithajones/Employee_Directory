//Set up imports
import React from "react";
import "./table.css";
import API from "../../utils/API";
import Data from "./Data";

//Set up the table state
class Table extends React.Component {
    state = {
      search: "",
      className: "fas fa-arrow-square-up",
      originalUsers: [],
      filteredUsers: [],
    };

      //Setting up usersArr function to pass in state.users
  componentDidMount() {
    this.usersArr();
  }

  //API call to users from the random generator
  usersArr = () => {
    API.getUsers()
      .then(res => this.setState({ originalUsers: res.data.results, filteredUsers: res.data.results }))
      .catch(err => console.log(err));
  }

    //Setting up the function to filter users
    handleChange = e => {
        const { name, value } = e.target;
    
        this.setState({
          [name]: value
        });
//export
export default Table;