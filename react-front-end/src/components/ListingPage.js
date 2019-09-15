import React, { Fragment, useEffect, useState } from "react";
import { Button } from "antd";
import "antd/dist/antd.css";
import TopBar from "./TopBar";
import ListingItem from './ListingItem';
import { Review } from './Review';

import axios from 'axios';

const ListingPage = props => {
  const [show, setShow] = useState('list');
  const [itemId, setItemId] = useState(undefined);
  const buttonNames = ['Food', 'Clothing', 'Misc'];
  const [items, setItems] = useState({});
  const [currentItem, setCurrentItem] = useState({});
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

  useEffect(() => {
    if (itemId) {
      axios.get(`/api/v1/posts/${itemId}`)
        .then((response) => {
          console.log(response);
          setShow('preview');
          setCurrentItem(response.data[0]);
        });
    }
  }, [itemId]);

  return (
    <Fragment>
      <TopBar logout/>
      {
        show === 'list' &&
        <Fragment>
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
                    setItemId={setItemId}
                  />
                )
              })
            }
          </div>
        </Fragment>
      }
      {
        show === 'preview' && Object.keys(currentItem).length !== 0 &&
        <Review showDatePicker={true} itemForReview={currentItem}/>
      }
    </Fragment>
  );
};

export { ListingPage };