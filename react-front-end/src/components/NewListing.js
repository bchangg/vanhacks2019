import React, { useState, useEffect } from "react";
//import { navigate } from "hookrouter";
import { Form, Icon, Input, Button } from "antd";
import "antd/dist/antd.css";
import "./antd2.css";
import { Collapse } from "antd";
import { CategoryPage } from "./CategoryPage";
import { DescriptionPage } from "./DescriptionPage";
import { SelectPickup } from "./SelectPickup";
import { PickupScheduling } from "./PickupScheduling";
import { Review } from "./Review";

const { Panel } = Collapse;

const NewListing = pros => {
  const [accordionKey, setAccordionKey] = useState("CategoryPage");
  const [pickupDetails, setPickupDetails] = useState({
    title: "",
    quantity: 0,
    notes: "",
    pickup_deadline: "",
    phone: "",
    pickup_location: "",
    item_type: ""
  });

  useEffect(() => {}, [accordionKey]);

  var removePadding = {
    padding: "0"
  };
  const handleClick = () => {
    console.log("navigate");
  };
  return (
    <>
      <Collapse
        style={removePadding}
        accordion={true}
        bordered={false}
        activeKey={accordionKey}
        accordion
      >
        <Panel style={removePadding} showArrow={false} key="CategoryPage">
          <CategoryPage
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></CategoryPage>
        </Panel>
        <Panel style={removePadding} showArrow={false} key="DescriptionPage">
          <DescriptionPage
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></DescriptionPage>
        </Panel>
        <Panel style={removePadding} showArrow={false} key="SelectPickup">
          <SelectPickup
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></SelectPickup>
        </Panel>
        <Panel style={removePadding} showArrow={false} key="PickupScheduling">
          <PickupScheduling
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></PickupScheduling>
        </Panel>
        <Panel style={removePadding} showArrow={false} key="Review">
          <Review
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></Review>
        </Panel>
      </Collapse>
    </>
    // <div className="App">
    //   <h1>{ this.state.message }</h1>
    //   <button onClick={this.fetchData} >
    //     Fetch Data
    //   </button>
    // </div>
  );
};

export { NewListing };
