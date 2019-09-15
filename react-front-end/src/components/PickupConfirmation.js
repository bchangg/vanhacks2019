import React, { useState } from "react";
import { Form, Icon, Input, Button, DatePicker, Upload } from "antd";
import "antd/dist/antd.css";
const PickupConfirmation = props => {
  const { TextArea } = Input;

  const [textArea, setTextArea] = useState("");
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  function onTextChange(event) {
    setTextArea(event.target.value);
  }
  function onPhoneChange(event) {
    setPhone(event.target.value);
  }

  function onDateChange(date, dateString) {
    setDate(dateString);
  }

  function checkAll() {
    return true;
    if (textArea && date && phone) {
      return true;
    } else {
      return false;
    }
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
      <TextArea
        value={textArea}
        onChange={onTextChange}
        placeholder="Please leave detailed instructions as to 
        where you will be leaving the item for pick-up"
        autosize={{ minRows: 3, maxRows: 5 }}
      />

      <h2>What is your contact number?</h2>

      <Input
        value={phone}
        onChange={onPhoneChange}
        placeholder={"Input Phone Number"}
      />
      <p>
        Your number will not be shared with anyone, and will only be used to
        send you pickup confirmation SMS.
      </p>

      <Button
        onClick={() => {
          props.setPickupDetails(prev => {
            return {
              ...prev,
              pickup_deadline: date,
              phone: phone,
              pickup_location: textArea
            };
          });
          if (checkAll()) {
            props.setShowStage(prev => {
              return {
                ...prev,
                Review: true
              };
            });
            props.setAccordionKey("Review");
          } else {
            alert("fill all fields");
          }
        }}
        type="primary"
      >
        Go To Review
      </Button>
    </>
  );
};

export { PickupConfirmation };
