import React from "react";
import NgoSignIn from "./components/NgoSignIn";
import { NewListing } from "./components/NewListing";
import { ListingPage } from "./components/ListingPage";
import ListingDetails from "./components/ListingDetails";
import App from "./App";

const routes = {
  "/login": () => <NgoSignIn />,
  "/items": () => <ListingPage />,
  "/items/:id": ({ id }) => <ListingDetails id={id} />,
  "/": () => <App />,
  "/newItem": () => <NewListing />
};

export default routes;
