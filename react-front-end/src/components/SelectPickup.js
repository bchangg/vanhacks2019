import React from "react";
import { Button, Divider } from "antd";
import "antd/dist/antd.css";
const SelectPickup = props => {
  return (
    <>
      <h2>Select pickup type</h2>
      <Divider />

      <h3>Pick-up in person</h3>
      <p>Organization representatives will contant you directly and setup a time and place for pick-up</p>
      <Button
        onClick={() => {
          props.setAccordionKey("PickupLocation");
          props.setShowStage(prev => {
            return {
              ...prev,
              PickupLocation: true
            };
          });
        }}
        type="primary"
      >
        Select
      </Button>
      <Divider dashed />
      <h3>Leave for pickup</h3>
      <p>Leave the items a secure area, and have a representative come to pick-up at any time.</p>
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
