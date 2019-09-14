import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";

const DescriptionPage = props => {
  const handleClick = () => {
    console.log("navigate");
  };
  return (
    <>
      <h1>Donation Details</h1>
      <p>
        Do you have any unwanted food, clothing or other things that you want to
        give away?
      </p>
      <Button
        onClick={() => {
          props.setAccordionKey("SelectPickup");
        }}
        type="primary"
      >
        Post a donation
      </Button>
    </>
  );
};

export { DescriptionPage };
