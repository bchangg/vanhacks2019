import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { NewListing } from "./components/NewListing";

const App = () => {
  return (
    <>
      <NewListing></NewListing>
    </>
    // <div className="App">
    //   <h1>{ this.state.message }</h1>
    //   <button onClick={this.fetchData} >
    //     Fetch Data
    //   </button>
    // </div>
  );
};

export default App;
