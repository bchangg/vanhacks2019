import React from "react";
//import { navigate } from "hookrouter";
import { Button } from "antd";

const CategoryPage = pros => {
  const item = {
    title: "",
    quantity: 0,
    notes: "",
    pickup_deadline: "",
    phone: "",
    pickup_location: "",
    item_type: ""
  };
  const handleClick = value => {
    item.item_type = value;
    //navigate("/");
  };
  return (
    <>
      <Button onClick={handleClick("food")} type="primary">
        Food
      </Button>
      <Button onClick={handleClick("clothing")} type="primary">
        Clothing
      </Button>
      <Button onClick={handleClick("misc")} type="primary">
        Misc
      </Button>
    </>
  );
};
export { CategoryPage };
