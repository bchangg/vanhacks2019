import React from 'react';
import { Paper } from '@material-ui/core';
import { navigate } from 'hookrouter';

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

export default function ListingItem(props) {
  const date = new Date(props.pickupDeadline);
  const viewItem = function(itemId) {
    console.log(itemId);
    props.setItemId(itemId)
  }

  return (
    <Paper onClick={() => viewItem(props.id)}>
      <div className="d-flex flex-row align-items-center">
        <div className="d-flex flex-column align-items-start">
          <span>{props.title}</span>
          <span>{props.pickupDeadline}</span>
          <p>{props.notes}</p>
        </div>
        <img style={{maxWidth: '4.5rem'}} src={props.url} alt={`image_${props.title}`}/>
      </div>
      <div className="d-flex flex-row justify-content-around">
        <div className="d-flex flex-column align-items-center">
          <span>Category</span>
          <span>{props.type}</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>Deadline</span>
          <span>{`${date.getDate()} ${monthParser(date.getMonth())}, ${date.getFullYear()}`}</span>
        </div>
        <div className="d-flex flex-column align-items-center">
          <span>Pickup Type</span>
          <span>Leave for Pickup</span>
        </div>
      </div>
    </Paper>
  )
}