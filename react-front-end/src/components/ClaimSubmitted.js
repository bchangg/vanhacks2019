import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { navigate } from "hookrouter";

const ClaimSubmitted = props => {
  return (
    <>
      <h1>Claim Submitted!</h1>

      <p>
        The donor has been contacted with your claim. You will receive an SMS
        when it is confirmed.
      </p>

      <Button
        onClick={() => {
          setTimeout(() => {
            navigate("/items");
          }, 2);
        }}
        type="primary"
      >
        Back to listings
      </Button>
    </>
  );
};
export { ClaimSubmitted };
