import React from "react";
import NgoSignIn from "./components/NgoSignIn";
import { NewListing } from "./components/NewListing";
import { ListingPage } from "./components/ListingPage";
import ListingDetails from "./components/ListingDetails";
import App from "./App";
import { DonationPosted } from "./components/DonationPosted";
import { LandingPage } from "./components/LandingPage";
import { ClaimSubmitted } from "./components/ClaimSubmitted";
import axios from "axios";

const routes = {
  "/login": () => <NgoSignIn />,
  "/donationPost": () => <DonationPosted />,
  "/items": () => <ListingPage />,
  "/home": () => <LandingPage />,
  "/items/:id": ({ id }) => <ListingDetails id={id} />,
  "/": () => <App />,
  "/newItem": () => <NewListing />,
  "/claim": () => <ClaimSubmitted />
};

export default routes;
