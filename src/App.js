//need to set up imports to create the app: react, header & table
import React from 'react';
import Header from "./components/header/header";
import Table from "./components/table/table";
import 'bootstrap/dist/css/bootstrap.min.css';


const App = () => {
  return (
    <div className= 'container' >
      <Header />
      <Table /> 
    </div>
  )
}

export default App;
