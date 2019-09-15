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
    if (addressOne && city && province && textArea) {
      return true;
    } else {
      return false;
    }
  }
  return (
    <>
      <h1>Leave for pick-up</h1>

      <h4>Pick Address</h4>

      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>
          Address Line 1 <span style={{ color: "red" }}>*</span>
        </p>
        <Input
          onChange={event => {
            setAddressOne(event.target.value);
          }}
          value={addressOne}
          placeholder={"post title"}
        />
      </div>
      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>Address Line 2</p>
        <Input
          onChange={event => {
            setAddressTwo(event.target.value);
          }}
          value={addressTwo}
          placeholder={"post title"}
        />
      </div>

      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>
          City <span style={{ color: "red" }}>*</span>
        </p>
        <Input
          onChange={event => {
            setCity(event.target.value);
          }}
          value={city}
          placeholder={"post title"}
        />
      </div>

      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>
          Province <span style={{ color: "red" }}>*</span>
        </p>
        <Input
          onChange={event => {
            setProvince(event.target.value);
          }}
          value={province}
          placeholder={"post title"}
        />
      </div>

      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>Postal Code</p>
        <Input
          onChange={event => {
            setZipcode(event.target.value);
          }}
          value={zipcode}
          placeholder={"post title"}
        />
      </div>

      <div>
        <p style={{ marginBottom: 0, marginTop: 14 }}>Country</p>
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
