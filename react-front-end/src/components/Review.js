import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";

const Review = props => {
  return (
    <>
      <h1>Display Review</h1>
      <Button
        onClick={() => {
          console.log("NAVIGATE");
        }}
        type="primary"
      >
        NAVIGATE
      </Button>
    </>
  );
};
export { Review };
