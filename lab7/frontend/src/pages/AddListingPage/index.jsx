import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./style.css";

const AddListingPage = ({ onAdd }) => {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [image_url, setImageUrl] = useState("");
  const [pricePerNight, setPricePerNight] = useState("");

  const navigate = useNavigate();

  const handleSubmit = (e) => {
    e.preventDefault();

    if (!title || !description || !pricePerNight) {
      alert("Please fill out all required fields.");
      return;
    }

    const newListing = {
      title,
      description,
      image_url:
        image_url || "https://via.placeholder.com/300x200?text=Default+Image",
      pricePerNight: Number(pricePerNight),
    };

    onAdd(newListing);

    navigate("/");
  };

  return (
    <div className="add-listing-container">
      <h1>Add a New Property Listing</h1>
      <form onSubmit={handleSubmit} className="listing-form">
        <div>
          <label htmlFor="title">Title:</label>
          <input
            id="title"
            type="text"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
            required
          />
        </div>
        <div>
          <label htmlFor="description">Description:</label>
          <textarea
            id="description"
            value={description}
            onChange={(e) => setDescription(e.target.value)}
            required
          ></textarea>
        </div>
        <div>
          <label htmlFor="image_url">Image URL (Optional):</label>
          <input
            id="image_url"
            type="text"
            value={image_url}
            onChange={(e) => setImageUrl(e.target.value)}
          />
        </div>
        <div>
          <label htmlFor="price">Price Per Night (EGP):</label>
          <input
            id="price"
            type="number"
            value={pricePerNight}
            onChange={(e) => setPricePerNight(e.target.value)}
            required
          />
        </div>
        <button type="submit">Create Listing</button>
      </form>
    </div>
  );
};

export default AddListingPage;
