import { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
// import DUMMY_LISTINGS from "./assets/data";
import Header from "./components/Header/";
import HomePage from "./pages/HomePage";
import AddListingPage from "./pages/AddListingPage";
import NotFoundPage from "./pages/NotFoundPage";
import "./App.css";

const getListings = async () => {
  const data = await fetch("http://localhost:3000/api/listings");
  const listings = await data.json();
  return listings;
};

const addListing = async (listing) => {
  await fetch("http://localhost:3000/api/listings", {
    method: "POST",
    headers: {
      "Content-Type": "application/json", // <--- Very important; tell the server the data is JSON and needs to be parsed as such.
    },
    body: JSON.stringify(listing),
  });
};

const deleteListing = async (id) => {
  await fetch(`http://localhost:3000/api/listings/${id}`, {
    method: "DELETE",
  });
};

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);

  const loadListings = async () => {
    const newListings = await getListings();
    setListings(newListings);
  };

  const handleDelete = async (id) => {
    await deleteListing(id);
    await loadListings();
  };

  const handleAdd = async (newListing) => {
    await addListing(newListing);
    await loadListings();
  };

  useEffect(() => {
    loadListings().then(() => {
      setLoading(false);
    });
  }, []);

  return (
    <div className="App">
      <Header />
      {!loading ? (
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
      ) : (
        <p>Loading...</p>
      )}
    </div>
  );
}

export default App;
