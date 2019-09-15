import React from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import TopBar from "./components/TopBar";
const App = () => {
  return (
    <>
      <TopBar login/>
      <p>LANDING PAGE</p>
      <LandingPage></LandingPage>
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
