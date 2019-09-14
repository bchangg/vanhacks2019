import React, { Component } from "react";
import axios from "axios";
import "./App.css";
import { LoadingPage } from "./components/LoadingPage";
import { CategoryPage } from "./components/CategoryPage";
import { Divider } from "antd";

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
