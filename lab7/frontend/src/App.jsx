import { useEffect, useState, useContext } from "react";
import { Routes, Route } from "react-router-dom";
import { AuthContext } from "./context/AuthContext";
import { listingAPI } from "./api/listing.api";
// import DUMMY_LISTINGS from "./assets/data";
import Header from "./components/Header/";
import HomePage from "./pages/HomePage";
import AddListingPage from "./pages/AddListingPage";
import NotFoundPage from "./pages/NotFoundPage";
import RegisterPage from "./pages/RegisterPage";
import LoginPage from "./pages/LoginPage";
import AdminPage from "./pages/AdminPage";
import "./App.css";

function App() {
  const [listings, setListings] = useState([]);
  const [loading, setLoading] = useState(true);
  const { loading: authLoading } = useContext(AuthContext);

  const loadListings = async () => {
    try {
      const newListings = await listingAPI.getListings();
      setListings(newListings);
    } catch (error) {
      console.error("Failed to load listings:", error);
      setListings([]);
    }
  };

  const handleDelete = async (id) => {
    try {
      await listingAPI.deleteListing(id);
      await loadListings();
    } catch (error) {
      console.error("Failed to delete listing:", error);
    }
  };

  const handleAdd = async (newListing) => {
    try {
      await listingAPI.createListing(newListing);
      await loadListings();
    } catch (error) {
      console.error("Failed to add listing:", error);
    }
  };

  useEffect(() => {
    loadListings().then(() => {
      setLoading(false);
    });
  }, []);

  if (authLoading) {
    return (
      <div className="App">
        <Header />
        <p>Loading...</p>
      </div>
    );
  }

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
            <Route path="/register" element={<RegisterPage />} />
            <Route path="/login" element={<LoginPage />} />
            <Route path="/admin" element={<AdminPage />} />
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
