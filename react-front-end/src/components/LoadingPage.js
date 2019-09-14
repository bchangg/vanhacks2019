import React from "react";
//import { navigate } from "hookrouter";
import { Button } from "antd";

const LoadingPage = pros => {
  const handleClick = () => {
    console.log("navigate");
  };
  return (
    <>
      <h1>Post a donation today</h1>
      <p>
        Do you have any unwanted food, clothung or other things that you want to
        give away?
      </p>
      <Button onClick={handleClick()} type="primary">
        Post a donation
      </Button>
    </>
  );
};

export { LoadingPage };
