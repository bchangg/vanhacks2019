import React, { useState } from "react";
import "antd/dist/antd.css";
import "./antd2.css";
import { Collapse } from "antd";
import { CategoryPage } from "./CategoryPage";
import { DescriptionPage } from "./DescriptionPage";
import { SelectPickup } from "./SelectPickup";
import { PickupConfirmation } from "./PickupConfirmation";
import { PickupLocation } from "./PickupLocation";
import { Review } from "./Review";

const { Panel } = Collapse;

const NewListing = pros => {
  const [accordionKey, setAccordionKey] = useState("CategoryPage");
  const [showStage, setShowStage] = useState({
    CategoryPage: true,
    DescriptionPage: false,
    SelectPickup: false,
    PickupLocation: false,
    PickupConfirmation: false,
    Review: false
  });
  const [pickupDetails, setPickupDetails] = useState({
    title: "",
    quantity: 0,
    notes: "",
    pickup_deadline: "",
    phone: "",
    pickup_location: "",
    item_type: "",
    address: "",
    city: "",
    province: "",
    zipcode: "",
    country: ""
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
            display: showStage.PickupLocation ? "block" : "none"
          }}
          header="Pickup Location"
          key="PickupLocation"
        >
          <PickupLocation
            setShowStage={setShowStage}
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></PickupLocation>
        </Panel>
        <Panel
          style={{
            display: showStage.PickupConfirmation ? "block" : "none"
          }}
          header="Pickup Confirmation"
          key="PickupConfirmation"
        >
          <PickupConfirmation
            setShowStage={setShowStage}
            setPickupDetails={setPickupDetails}
            setAccordionKey={setAccordionKey}
          ></PickupConfirmation>
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
