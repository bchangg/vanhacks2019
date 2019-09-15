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

  function onUpload(info) {
    if (info.file.status !== "uploading") {
      console.log("uploading");
      console.log(info.file, info.fileList);
    }
    if (info.file.status === "done") {
      console.log("done");
    } else if (info.file.status === "error") {
      console.log("error");
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

      <Upload onChange={onUpload}>
        <Button>
          <Icon type="upload" /> Add Images+
        </Button>
      </Upload>

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
          props.setAccordionKey("SelectPickup");
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
