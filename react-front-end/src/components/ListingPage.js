import React, { Fragment, useEffect, useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import TopBar from "./TopBar";
import ListingItem from './ListingItem';

import axios from 'axios';

const ListingPage = props => {
  const buttonNames = ['Food', 'Clothing', 'Misc'];
  const [items, setItems] = useState({});
  useEffect(() => {
    axios.get('/api/v1/posts')
      .then((response) => {
        setItems(response.data)
      })
      .catch((error) => {
        setItems({})
        alert('Server returned an error!');
      })
  }, [])
  return (
    <Fragment>
      <TopBar logout/>
      <div>
        {
          buttonNames.map((name, index) => {
            return (
              <Button key={index} onClick={() => alert(`${name} filter applied`)}>{name}</Button>
            );
          })
        }
      </div>
      <div>
        {
          Array.isArray(items) && items.map((item, index) => {
            return (
              <ListingItem
                key={item.id}
                id={item.id}
                title={item.title}
                quantity={item.quantity}
                notes={item.notes}
                pickupDeadline={item.pickup_deadline}
                pickupLocation={item.pickup_location}
                type={item.item_type}
                url={item.url}
              />
            )
          })
        }
      </div>
    </Fragment>
  );
};

export { ListingPage };