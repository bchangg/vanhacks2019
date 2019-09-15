import React, { useState } from "react";
import { Input, Button, DatePicker } from "antd";
import "antd/dist/antd.css";
const PickupConfirmation = props => {
  const [date, setDate] = useState("");
  const [phone, setPhone] = useState("");

  function onPhoneChange(event) {
    setPhone(event.target.value);
  }

  function onDateChange(date, dateString) {
    setDate(dateString);
  }

  function checkAll() {
    if (date && phone) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <h1>Pickup confirmation</h1>

      <h4>Pickup deadline</h4>
      <DatePicker onChange={onDateChange} />
      <br />

      <h2>Confirmation contact</h2>
      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}> Phone Number</p>
        <Input value={phone} onChange={onPhoneChange} />
        <p>
          Your number will not be shared with anyone, and will only be used to
          send you pickup confirmation SMS.
        </p>
      </div>

      <Button
        onClick={() => {
          props.setPickupDetails(prev => {
            return {
              ...prev,
              pickup_deadline: date,
              phone: phone
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
            alert("fill in phone and date");
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
