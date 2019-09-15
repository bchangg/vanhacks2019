import React, { useState, useEffect } from "react";
import axios from "axios";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import { NewListing } from "./components/NewListing";

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  render() {
    return (
      <>
        <p>LANDING PAGE</p>
        <LoadingPage></LoadingPage>
        <br />
        <CategoryPage></CategoryPage>
        <br />
      </>
      // <div className="App">
      //   <h1>{ this.state.message }</h1>
      //   <button onClick={this.fetchData} >
      //     Fetch Data
      //   </button>
      // </div>
    );
  }
}

export default App;
