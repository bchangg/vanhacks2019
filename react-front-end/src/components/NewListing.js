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
  const [showStage, setShowStage] = useState({
    CategoryPage: true,
    DescriptionPage: false,
    SelectPickup: false,
    PickupScheduling: false,
    Review: false
  });
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
            setShowStage={setShowStage}
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></CategoryPage>
        </Panel>

        <Panel
          style={{
            display: showStage.DescriptionPage ? "block" : "none"
          }}
          header="Description"
          key="DescriptionPage"
        >
          <DescriptionPage
            setShowStage={setShowStage}
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></DescriptionPage>
        </Panel>

        <Panel
          style={{
            display: showStage.SelectPickup ? "block" : "none"
          }}
          header="Select Pickup"
          key="SelectPickup"
        >
          <SelectPickup
            setShowStage={setShowStage}
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></SelectPickup>
        </Panel>
        <Panel
          style={{
            display: showStage.PickupScheduling ? "block" : "none"
          }}
          header="Pickup Scheduling"
          key="PickupScheduling"
        >
          <PickupScheduling
            setShowStage={setShowStage}
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></PickupScheduling>
        </Panel>
        <Panel
          style={{
            display: showStage.Review ? "block" : "none"
          }}
          header="Pickup Review"
          key="Review"
        >
          <Review
            setShowStage={setShowStage}
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
