import { useState } from "react";
import { Routes, Route } from "react-router-dom";
import DUMMY_LISTINGS from "./assets/data";
import Header from "./components/Header/";
import HomePage from "./pages/HomePage";
import AddListingPage from "./pages/AddListingPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

function App() {
  const [listings, setListings] = useState(DUMMY_LISTINGS);

  const handleDelete = (id) => {
    setListings(listings.filter((listing) => listing._id !== id));
  };

  const handleAdd = (newListing) => {
    const listingWithId = { ...newListing, _id: crypto.randomUUID() };
    setListings([...listings, listingWithId]);
  };

  return (
    <div className="App">
      <Header />
      <div className="main-container">
        <Routes>
          <Route
            path="/"
            element={<HomePage listings={listings} onDelete={handleDelete} />}
          />
          <Route path="/add" element={<AddListingPage onAdd={handleAdd} />} />
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </div>
    </div>
  );
}

export default App;