import React, { useState } from "react";
import { Input, Button } from "antd";
import "antd/dist/antd.css";
const PickupLocation = props => {
  const { TextArea } = Input;

  const [addressOne, setAddressOne] = useState("");
  const [addressTwo, setAddressTwo] = useState("");
  const [city, setCity] = useState("");
  const [province, setProvince] = useState("");
  const [zipcode, setZipcode] = useState("");
  const [country, setCountry] = useState("");
  const [textArea, setTextArea] = useState("");

  function checkAll() {
    return true;
    if (addressOne && city && province && textArea) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <h2>Leave for pick-up</h2>

      <h3>Pick Address</h3>

      <div>
        <label>
          Address Line 1 <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          onChange={event => {
            setAddressOne(event.target.value);
          }}
          value={addressOne}
          placeholder={"post title"}
        />
      </div>
      <div>
        <label>Address Line 2</label>
        <Input
          onChange={event => {
            setAddressTwo(event.target.value);
          }}
          value={addressTwo}
          placeholder={"post title"}
        />
      </div>

      <div>
        <label>
          City <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          onChange={event => {
            setCity(event.target.value);
          }}
          value={city}
          placeholder={"post title"}
        />
      </div>

      <div>
        <label>
          Province <span style={{ color: "red" }}>*</span>
        </label>
        <Input
          onChange={event => {
            setProvince(event.target.value);
          }}
          value={province}
          placeholder={"post title"}
        />
      </div>

      <div>
        <label>Postal Code</label>
        <Input
          onChange={event => {
            setZipcode(event.target.value);
          }}
          value={zipcode}
          placeholder={"post title"}
        />
      </div>

      <div>
        <label>Country</label>
        <Input
          onChange={event => {
            setCountry(event.target.value);
          }}
          value={country}
          placeholder={"post title"}
        />
      </div>

      <h2>
        Pick-up location <span style={{ color: "red" }}>*</span>
      </h2>
      <TextArea
        value={textArea}
        onChange={event => {
          setTextArea(event.target.value);
        }}
        placeholder="Give a description of where your donation will be left out for pickup e.g. “Donations will be in a cardboard box on my front porch."
        autosize={{ minRows: 3, maxRows: 5 }}
      />

      <Button
        onClick={() => {
          props.setPickupDetails(prev => {
            return {
              ...prev,
              address: addressOne,
              address2: addressTwo,
              city: city,
              province: province,
              zipcode: zipcode,
              country: country
            };
          });
          if (checkAll()) {
            props.setShowStage(prev => {
              return {
                ...prev,
                PickupConfirmation: true
              };
            });
            props.setAccordionKey("PickupConfirmation");
          } else {
            alert("fill in address 1, city, province and location ");
          }
        }}
        type="primary"
      >
        Next
      </Button>
    </>
  );
};

export { PickupLocation };
