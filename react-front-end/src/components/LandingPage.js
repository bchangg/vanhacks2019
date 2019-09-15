import React from "react";
//import { navigate } from "hookrouter";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const LandingPage = props => {
  const handleClick = () => {
    props.getNewAccordion("");
  };

  return (
    <>
      <h1>Welcome to Still Good!</h1>
      <h2>Post a donation</h2>
      <p>
        Do you have any unwanted food, clothing or other things that you want to
        give away?
      </p>
      <Button onClick={handleClick()} type="primary">
        Post a donation
      </Button>
    </>
  );
};

export { LandingPage };
