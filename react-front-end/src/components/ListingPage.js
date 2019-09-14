import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";

export default ListingPage(props => {
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
});
