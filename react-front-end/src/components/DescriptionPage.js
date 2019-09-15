import React, { useState } from "react";
import { Form, Upload, Button, Icon, Input, InputNumber } from "antd";

import "antd/dist/antd.css";

const { TextArea } = Input;

const DescriptionPage = props => {
  const [textArea, setTextArea] = useState("");
  const [title, setTitle] = useState("");
  const [quantity, setQuantity] = useState("");

  function onTitleChange(event) {
    setTitle(event.target.value);
  }

  function onTextChange(event) {
    setTextArea(event.target.value);
  }

  function onQuantityChange(event) {
    setQuantity(event);
  }

  function checkAll() {
    if (textArea && title && quantity) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <h1>Donation Details</h1>

      <Input
        onChange={onTitleChange}
        value={title}
        placeholder={"post title"}
      />

      <InputNumber
        onChange={onQuantityChange}
        placeholder={"Quantity"}
        value={quantity}
        min={1}
        max={10}
      />

      <TextArea
        value={textArea}
        onChange={onTextChange}
        placeholder="Please leave detailed instructions as to 
        where you will be leaving the item for pick-up"
        autosize={{ minRows: 3, maxRows: 5 }}
      />

      <Button
        onClick={() => {
          props.setPickupDetails(prev => {
            return {
              ...prev,
              quantity: quantity,
              notes: textArea,
              title: title
            };
          });
          if (checkAll()) {
            props.setShowStage(prev => {
              return {
                ...prev,
                SelectPickup: true
              };
            });
            props.setAccordionKey("SelectPickup");
          } else {
            alert("fill all fields");
          }
        }}
        type="primary"
        htmlType="submit"
      >
        Post a donation
      </Button>
    </>
  );
};

export { DescriptionPage };
