import React, { useState } from "react";
import { Button, Modal, DatePicker } from "antd";
import "antd/dist/antd.css";
import { navigate } from "hookrouter";
import axios from "axios";

const Review = props => {
  const [interest, setInterest] = useState(false);
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState("");

  function onDateChange(date, dateString) {
    setDate(dateString);
    disabled = true;
  }
  let disabled = false;

  return (
    <>
      <h1>Display Review</h1>
      <span>
        <p>{props.itemForReview.item_type}</p>
        <p>{props.itemForReview.pickup_deadline}</p>
      </span>

      <h3>{props.itemForReview.title}</h3>
      <p>{props.itemForReview.notes}</p>

      <h4>Leave for pickup</h4>
      <p>{props.itemForReview.pickup_location}</p>
      {!props.showDatePicker ? (
        <Button
          onClick={() => {
            axios
              .post("/api/v1/posts", props.itemForReview)
              .then(response => {
                navigate("/donationPost");
              })
              .catch(error => {
                console.log(error);
              });
          }}
          type="primary"
        >
          Post your donation
        </Button>
      ) : (
        <Button
          onClick={() => {
            setInterest(true);
            setVisible(true);
          }}
          type="primary"
        >
          We're interested!
        </Button>
      )}
      {interest && (
        <Modal
          visible={visible}
          title="Select a pickup day"
          footer={[
            <Button
              key="back"
              onClick={() => {
                setVisible(false);
              }}
            >
              Return
            </Button>,
            <Button
              disabled={disabled}
              onClick={() => {
                alert("Create Post for Organization");
              }}
              type="primary"
            >
              Claim this donation
            </Button>
          ]}
        >
          <DatePicker onChange={onDateChange} />
        </Modal>
      )}
    </>
  );
};
export { Review };
