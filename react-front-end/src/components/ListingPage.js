import React from "react";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import TopBar from "./TopBar";

const ListingPage = props => {
  return (
    <>
      <TopBar logout/>
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
