import { useState } from "react";
import DUMMY_LISTINGS from "./assets/data";
import Header from "./components/Header/";
import "./App.css";
import ListingCard from "./components/ListingCard";

function App() {
  const [listings, setListings] = useState(DUMMY_LISTINGS);

  const handleDelete = (id) => {
    setListings(listings.filter((listing) => listing._id !== id));
  };

  const handleAdd = (newListing) => {
    const listingWithId = { ...newListing, _id: crypto.randomUUID() };
    setListings([...listings, listingWithId]);
  };

  console.log("Listings", listings)

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        Content will go here.
      </div>
    </div>
  );
}

export default App;
