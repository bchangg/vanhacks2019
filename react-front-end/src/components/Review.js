import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { axios } from "axios";

const Review = props => {
  const axios = require("axios");
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
          console.log(props.itemForReview);
          axios
            .post("/api/v1/posts", props.itemForReview)
            .then(response => {
              console.log(response.data);
            })
            .catch(error => {
              console.log(error);
            });
        }}
        type="primary"
      >
        Submit Posting
      </Button>
    </>
  );
};
export { Review };
