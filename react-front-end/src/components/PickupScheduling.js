import React, { useState } from "react";
import { Form, Icon, Input, Button, DatePicker, Upload } from "antd";
import "antd/dist/antd.css";
const PickupScheduling = props => {
  const { TextArea } = Input;

  const [textArea, setTextArea] = useState("");

  function onTextChange(event) {
    console.log(event.target.value);
    setTextArea(event.target.value);
  }

  function onDateChange(date, dateString) {
    console.log(date, dateString);
  }
  return (
    <>
      <h1>Leave for pick-up</h1>
      <p>
        Please select a day and time that you can leave the items out for, and a
        description of where you will be leaving it
      </p>

      <h2>What is your delivery deadline?</h2>
      <DatePicker onChange={onDateChange} />
      <br />

      <h2>Pick-up location</h2>
      <Upload>
        <Button>
          <Icon type="upload" /> Add Images+
        </Button>
      </Upload>

      <TextArea
        value={textArea}
        onChange={onTextChange}
        placeholder="Please leave detailed instructions as to 
        where you will be leaving the item for pick-up"
        autosize={{ minRows: 3, maxRows: 5 }}
      />

      <h2>What is your contact number?</h2>

      <Input placeholder={"Input Phone Number"} />
      <p>
        Your number will not be shared with anyone, and will only be used to
        send you pickup confirmation SMS.
      </p>

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
