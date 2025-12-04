import { useEffect } from "react";
import ListingCard from "../../components/ListingCard";
import { Link } from "react-router-dom";

const HomePage = ({ listings, onDelete }) => {
  useEffect(() => {
    document.title = `EBDbnb (${listings.length} Listings)`;
  }, [listings]);

  return (
    <>
      <h1>({listings.length}) Property Listings in Egypt</h1>
      <div className="listings-container">
        {listings.map((listing) => (
          <div key={listing._id}>
            <ListingCard listing={listing} onDelete={onDelete} />
          </div>
        ))}

        {listings.length === 0 && (
          <em style={{ color: "red" }}>All listings have been deleted. <Link to="/add">Add listing.</Link></em>
        )}
      </div>
    </>
  );
};

export default HomePage;
