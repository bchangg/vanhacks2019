import React from "react";
import "./App.css";
import { LandingPage } from "./components/LandingPage";
import TopBar from "./components/TopBar";
const App = () => {
  return (
    <div className="sg-full-width">
      <TopBar login />
      <LandingPage></LandingPage>
    </div >
  );
};

export default App;
