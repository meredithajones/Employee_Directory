//Set up imports
import React from "react";
import "./table.css";
import API from "../../utils/API";
import TableData from "./tableData";

//Set up the table state
class Table extends React.Component {
    state = {
      search: "",
      className: "fas fa-arrow-square-up",
      originalUsers: [],
      filteredUsers: [],
    };