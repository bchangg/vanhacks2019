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
const axios = require("axios");

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

  const callBack = key => {
    setAccordionKey(key);
  };
  return (
    <>
      <Collapse activeKey={accordionKey} onChange={callBack} accordion>
        <Panel header="Category" key="CategoryPage">
          <CategoryPage
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></CategoryPage>
        </Panel>

        <Panel
          className={show ? "hide" : null}
          header="Description"
          key="DescriptionPage"
        >
          <DescriptionPage
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></DescriptionPage>
        </Panel>

        <Panel header="Select Pickup" key="SelectPickup">
          <SelectPickup
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></SelectPickup>
        </Panel>
        <Panel header="Pickup Scheduling" key="PickupScheduling">
          <PickupScheduling
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></PickupScheduling>
        </Panel>
        <Panel header="Pickup Review" key="Review">
          <Review
            itemForReview={pickupDetails}
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
