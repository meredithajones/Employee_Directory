//Set up imports
import React from "react";
import "./table.css";
import API from "../../utils/API";
import Data from "./data";
import SearchBtn from "../search/button";

//Set up the table state
class Table extends React.Component {
    state = {
      search: "",
      className: "fas fa-chevron-circle-up",
      originalUsers: [],
      filteredUsers: [],
      order:'descend'
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

    //function to sort users ascending or descending
  handleSort = e => {
        console.log("WORKING")

        if(this.state.order === "ascend"){
            this.setState({
                order: "descend"
            })
        }else{
            this.setState({
                order:"ascend"
            })
        };
  
        console.log(this.state.order)
     const sorting = (a, b) => {
        a = a.name.first.toLowerCase();
       b = b.name.first.toLowerCase();
      
       if(this.state.order ==='ascend'){
         //A-Z
          return a.localeCompare(b)
       } else{
         //Z-A
         return b.localeCompare(a)
       }
        
    }




const usersSorted = this.state.originalUsers.sort(sorting);
    console.log(usersSorted)
}




    // let {className, id} = e.target
    
    //Sort by User name
    // if(className === "fas fa-chevron-circle-up" && id === "name"){
    //   const sortUsersUp = this.state.filteredUsers.sort((a, b) => (a.name.first.toLowerCase() > b.name.first.toLowerCase()) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersUp });
    // } else if(className === "fas fa-chevron-circle-down" && id === "name"){
    //   const sortUsersDown = this.state.filteredUsers.sort((a, b) => (a.name.first.toLowerCase() < b.name.first.toLowerCase()) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersDown });

      //Sort by Phone number
    // } else if(className === "fas fa-chevron-circle-up" && id === "phone"){
    //   const sortUsersUp = this.state.filteredUsers.sort((a, b) => (a.phone > b.phone) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersUp });
    // } else if(className === "fas fa-chevron-circle-down" && id === "phone"){
    //   const sortUsersDown = this.state.filteredUsers.sort((a, b) => (a.phone < b.phone) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersDown });

      //Sort by email address
    // } else if(className === "fas fa-chevron-circle-up" && id === "email"){
    //   const sortUsersUp = this.state.filteredUsers.sort((a, b) => (a.email > b.email) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersUp });
    // } else if(className === "fas fa-chevron-circle-down" && id === "email"){
    //   const sortUsersDown = this.state.filteredUsers.sort((a, b) => (a.email < b.email) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersDown });

      //Sort by City
    // } else if(className === "fas fa-chevron-circle-up" && id === "country"){
    //   const sortUsersUp = this.state.filteredUsers.sort((a, b) => (a.location.city.toLowerCase() > b.location.city.toLowerCase()) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersUp });
    // } else if(className === "fas fa-chevron-circle-down" && id === "country"){
    //   const sortUsersDown = this.state.filteredUsers.sort((a, b) => (a.location.city.toLowerCase() < b.location.city.toLowerCase()) ? 1 : -1)
    //   this.className(className)
    //   this.setState({ filteredUsers: sortUsersDown });
    // }
  

  render() {
    return (
      <div>

        <SearchBtn
          search={this.state.search}
          handleChange={this.handleChange}
        />

        <Data
          users={this.state.filteredUsers}
          handleSort={this.handleSort}
          class={this.state.className}
        />
      </div>
    )
  }

}

//export
export default Table;