import React from "react";
import { navigate } from "hookrouter";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const LandingPage = props => {
  const handleClick = () => {
    navigate("/newItem");
  };

  return (
    <>
      <h1>Welcome to Still Good!</h1>
      <h2>Post a donation</h2>
      <p>Post a food or clothing donation, and have it picked up from you.</p>
      <Button onClick={handleClick} type="primary">
        Post a donation
      </Button>
      <Button
        onClick={() => {
          alert("It works!");
        }}
        type="default"
      >
        How it works
      </Button>
    </>
  );
};

export { LandingPage };
