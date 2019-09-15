import React, { Fragment, Component } from "react";
import axios from "axios";
import "./App.css";
import { LoadingPage } from "./components/LoadingPage";
import { CategoryPage } from "./components/CategoryPage";
import { Divider } from "antd";
import TopBar from "./components/TopBar"

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      message: "Click the button to load data!"
    };
  }

  render() {
    return (
      <Fragment>
        <TopBar signIn/>
        <div>
          <p>LANDING PAGE</p>
          <LoadingPage></LoadingPage>
          <br />
          <CategoryPage></CategoryPage>
          <br />
        </div>
      </Fragment>
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