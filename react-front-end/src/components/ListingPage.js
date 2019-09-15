import React from "react";
import { Button } from "antd";
import "antd/dist/antd.css";

const ListingPage = props => {
  return (
    <>
      <Button
        onClick={() => {
          props.setAccordionKey(4);
        }}
        type="primary"
      >
        Post a donation
      </Button>
    </>
  );
};

export { ListingPage };
