import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import { navigate } from "hookrouter";

const DonationPosted = props => {
  return (
    <>
      <h1>Donation Posted!</h1>

      <p>
        When a non-profit expresses interest in your donation, you will be
        notified via SMS for the pickup date.
      </p>
      <p>More info</p>

      <div>
        <h2>Save your details for next time?</h2>
        <p>
          Save all your pickup dedatils for next time by adding a password to
          your account
        </p>
        <Button
          onClick={() => {
            alert("account saved");
            setTimeout(() => {
              navigate("/home");
            }, 2);
          }}
          type="primary"
        >
          Finish account
        </Button>

        <Button
          onClick={() => {
            navigate("/home");
          }}
          type="primary"
        >
          Home
        </Button>
      </div>
    </>
  );
};
export { DonationPosted };
