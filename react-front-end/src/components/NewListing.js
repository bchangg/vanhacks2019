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
import TopBar from "./TopBar";

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
    address2: "",
    city: "",
    province: "",
    zipcode: "",
    country: "",
    url: "https://www.incimages.com/uploaded_files/image/970x450/getty_855098134_353411.jpg"
  });

  const callBack = key => {
    setAccordionKey(key);
  };
  return (
    <div className="sg-full-width">
      <TopBar logout />
      <div className="sg-new-listing ">
        <Collapse activeKey={accordionKey} onChange={callBack} accordion>
          <Panel header="Category" key="CategoryPage" className="sg-category-page">
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
            className="sg-description-page"
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
            className="sg-select-pickup"
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
            className="sg-pickup-location"
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
            className="sg-pickup-confirmation"
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
            className="sg-pickup-review"
          >
            <Review showDatePicker={false} itemForReview={pickupDetails}></Review>
          </Panel>
        </Collapse>
      </div>
    </div>
  );
};

export { NewListing };
