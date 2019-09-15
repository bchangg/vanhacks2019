import React, { useState } from "react";
import { Button, Modal, DatePicker, Divider } from "antd";
import "antd/dist/antd.css";
import { navigate } from "hookrouter";
import axios from "axios";

const monthParser = function(month) {
  switch (month) {
    case 1:
      return 'Jan';
    case 2:
      return 'Feb';
    case 3:
      return 'Mar';
    case 4:
      return 'Apr';
    case 5:
      return 'May';
    case 6:
      return 'Jun';
    case 7:
      return 'Jul';
    case 8:
      return 'Aug';
    case 9:
      return 'Sept';
    case 10:
      return 'Oct';
    case 11:
      return 'Nov';
    case 12:
      return 'Dec';
    default:
      return 'Invalid Month';
  }
}

const Review = props => {
  const [interest, setInterest] = useState(false);
  const [visible, setVisible] = useState(false);
  const [date, setDate] = useState("");

  function onDateChange(date, dateString) {
    setDate(dateString);
    disabled = true;
  }
  let disabled = false;
  let pickupDate = new Date( props.itemForReview.pickup_deadline );

  return (
    <div className="sg-review">
      <div className="sg-review-image" style={{ backgroundImage: `url(${props.itemForReview.url}` }}></div>

      <div className="sg-review-title-box">
        <h3>{props.itemForReview.title}</h3>
        <p>{props.itemForReview.notes}</p>
      </div>

      <div className="sg-review-cool-box">
        <p><span className="sg-review-label">Category</span>{props.itemForReview.item_type}</p>
        <Divider type="vertical" />
        <p><span className="sg-review-label">Deadline</span>{`${monthParser(pickupDate.getMonth())} ${pickupDate.getDate()}`}</p>
        <Divider type="vertical" />
        <p><span className="sg-review-label">Pickup Type</span>Leave for pickup</p>
      </div>

      <div className="sg-review-address">
        <h4>Pickup Address</h4>
        <p>
        {props.itemForReview.address} {props.itemForReview.address2}<br />
        {props.itemForReview.city}, {props.itemForReview.province}, {props.itemForReview.country}<br />
        {props.itemForReview.zipcode}
        </p>
      </div>
      <iframe width="100%" height="200" frameborder="0" style={{border: 0}}
        src={`https://www.google.com/maps/embed/v1/search?key=AIzaSyClTeAI8t2CGdio91gXQkyf62oPsgPO0TU&q=${props.itemForReview.address},${props.itemForReview.city}+${props.itemForReview.province}`} allowfullscreen="allow" />
      {!props.showDatePicker ? (
        <Button
          onClick={() => {
            axios
              .post("/api/v1/posts", props.itemForReview)
              .then(response => {
                navigate("/donationPost");
              })
              .catch(error => {
                console.log(error);
              });
          }}
          type="primary"
        >
          Post your donation
        </Button>
      ) : (
        <Button
          onClick={() => {
            setInterest(true);
            setVisible(true);
          }}
          type="primary"
        >
          We're interested!
        </Button>
      )}
      {interest && (
        <Modal
          visible={visible}
          title="Select a pickup day"
          footer={[
            <Button
              key="back"
              onClick={() => {
                setVisible(false);
              }}
            >
              Return
            </Button>,
            <Button
              disabled={disabled}
              onClick={() => {
                axios
                  .post(`/api/v1/org/1/pickup/${props.itemForReview.id}`, {
                    pickup_time: date
                  })
                  .then(response => {
                    navigate("/claim");
                  })
                  .catch(error => {
                    console.log(error);
                  });
              }}
              type="primary"
            >
              Claim this donation
            </Button>
          ]}
        >
          <DatePicker onChange={onDateChange} />
        </Modal>
      )}
    </div>
  );
};
export { Review };
