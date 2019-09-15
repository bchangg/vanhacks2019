import React from "react";
import { Form, Icon, Input, Button, Divider } from "antd";
import "antd/dist/antd.css";
const SelectPickup = props => {
  return (
    <>
      <h1>Pick-up Method</h1>
      <Divider />

      <h2>Leave for Pick-up</h2>
      <p>
        Leave the items in a box in a secure area, and have a representative
        come to pick-up at any time.
      </p>
      <Button
        onClick={() => {
          props.setAccordionKey("PickupScheduling");
          props.setShowStage(prev => {
            return {
              ...prev,
              PickupScheduling: true
            };
          });
        }}
        type="primary"
      >
        Select
      </Button>
      <Divider dashed />
      <h2>Pick-up in person</h2>
      <p>
        Organization representatives will contact you directly and setup a time
        and place for pick-up
      </p>
      <Button
        disabled={true}
        onClick={() => {
          props.setAccordionKey("PickupScheduling");
        }}
        type="primary"
      >
        Select
      </Button>
    </>
  );
};

export { SelectPickup };
