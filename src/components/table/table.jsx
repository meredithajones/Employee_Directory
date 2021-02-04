//Set up imports
import React from "react";
import "./table.css";
import API from "../../utils/API";
import Data from "./Data";

//Set up the table state
class Table extends React.Component {
    state = {
      search: "",
      className: "fas fa-chevron-circle-up",
      originalUsers: [],
      filteredUsers: [],
    };

      //Setting up usersArr function to pass in state.users
  componentDidMount() {
    this.usersArr();
  }

  //API call to get users from the random generator
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

   //If nothing is searched, display original users
    if (value === "") {
        this.setState({ filteredUsers: this.state.originalUsers })
        //Else if there is anything typed in, the users will start being filtered
      } else if (value !== "") {
        const filteredUsers = this.state.originalUsers.filter(data =>
          data.name.first.toLowerCase().startsWith(value.toLowerCase()) || data.name.last.toLowerCase().startsWith(value.toLowerCase()) || (`${data.name.first} ${data.name.last}`).toLowerCase().startsWith(value.toLowerCase())
        );
        this.setState({ filteredUsers });
      }
    };
  
    //Setting up the function to change the className
    className = (className) => {
        //Sorted asscending
      if(className === "fas fa-chevron-circle-up"){
          //Sorted descending
        this.setState({ className: "fas fa-chevron-circle-down" })
      } else if(className === "fas fa-chevron-circle-down"){
        this.setState({ className: "fas fa-chevron-circle-up" })
      }
    }
//export
export default Table;