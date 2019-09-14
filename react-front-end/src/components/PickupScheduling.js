import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
const PickupScheduling = props => {
  return (
    <>
      <h1>Leave for pick-up</h1>
      <Button
        onClick={() => {
          props.setAccordionKey("Review");
        }}
        type="primary"
      >
        Go To Review
      </Button>
    </>
  );
};

export { PickupScheduling };
