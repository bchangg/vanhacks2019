import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { navigate } from "hookrouter";
import axios from "axios";
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
          console.log(props.itemForReview);
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
    </>
  );
};
export { Review };
