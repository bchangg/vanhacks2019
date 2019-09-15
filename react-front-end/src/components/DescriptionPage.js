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
    return true;
    if (textArea && title && quantity) {
      return true;
    } else {
      return false;
    }
  }

  return (
    <>
      <h2>Donation Details</h2>
      <div>
        <label>Posting title (max 50 characters)</label>
        <Input
          onChange={onTitleChange}
          value={title}
          placeholder={"post title"}
        />
      </div>
      <div>
        <label>Quantity <span style={{ color: "red" }}>*</span></label>
        <InputNumber
          onChange={onQuantityChange}
          placeholder={"Quantity"}
          value={quantity}
          min={1}
          max={10}
        />
      </div>
      <div>
        <label>Additional details <span style={{ color: "red" }}>*</span></label>
        <TextArea
          value={textArea}
          onChange={onTextChange}
          label={"Additional details *"}
          autosize={{ minRows: 3, maxRows: 5 }}
        />
      </div>

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
