import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";

const Review = props => {
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

      <Button
        onClick={() => {
          console.log("NAVIGATE");
        }}
        type="primary"
      >
        Submit Posting
      </Button>
    </>
  );
};
export { Review };
