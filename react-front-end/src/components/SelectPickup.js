import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
const SelectPickup = props => {
  return (
    <>
      <h1>Pick-up Method</h1>
      <Button
        onClick={() => {
          props.setAccordionKey("PickupScheduling");
        }}
        type="primary"
      >
        Go to Scheduling
      </Button>
    </>
  );
};

export { SelectPickup };
