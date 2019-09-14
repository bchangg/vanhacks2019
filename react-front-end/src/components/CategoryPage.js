import React from "react";
//import { navigate } from "hookrouter";
import { Button } from "antd";
import "antd/dist/antd.css"; // or 'antd/dist/antd.less'

const CategoryPage = props => {
  const item = {
    title: "",
    quantity: 0,
    notes: "",
    pickup_deadline: "",
    phone: "",
    pickup_location: "",
    item_type: ""
  };
  return (
    <>
      <h1>What type of Design</h1>

      <Button
        onClick={() => {
          props.setPickupDetails(prev => {
            return { ...prev, item_type: "food" };
          });
          props.setAccordionKey("DescriptionPage");
        }}
        type="primary"
      >
        Food
      </Button>
      <Button
        onClick={() => {
          props.setPickupDetails(prev => {
            return { ...prev, item_type: "clothing" };
          });
          props.setAccordionKey("DescriptionPage");
        }}
        type="primary"
      >
        Clothing
      </Button>
      <Button
        onClick={() => {
          props.setPickupDetails(prev => {
            return { ...prev, item_type: "misc" };
          });
          props.setAccordionKey("DescriptionPage");
        }}
        type="primary"
      >
        Misc
      </Button>
    </>
  );
};
export { CategoryPage };
