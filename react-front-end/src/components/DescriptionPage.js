import React, { useState } from "react";
import { Button, Input, InputNumber } from "antd";

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
      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>
          Posting title (max 50 characters){" "}
          <span style={{ color: "red" }}>*</span>
        </p>
        <Input
          onChange={onTitleChange}
          value={title}
          placeholder={"post title"}
        />
      </div>
      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>
          Quantity <span style={{ color: "red" }}>*</span>
        </p>
        <InputNumber
          onChange={onQuantityChange}
          placeholder={"Quantity"}
          value={quantity}
          min={1}
          max={10}
        />
      </div>
      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>
          Additional details <span style={{ color: "red" }}>*</span>
        </p>
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
