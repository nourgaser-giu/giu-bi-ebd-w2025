import { useEffect, useContext } from "react";
import { AuthContext } from "../../context/AuthContext";
import ListingCard from "../../components/ListingCard";
import { Link } from "react-router-dom";
import "./style.css";

const HomePage = ({ listings, onDelete }) => {
  const { user } = useContext(AuthContext);

  useEffect(() => {
    document.title = "EBDbnb";
  }, []);

  if (!user) {
    return (
      <div className="login-prompt">
        <h1>Welcome to EBDbnb</h1>
        <p>Please log in to view and manage property listings.</p>
        <div className="auth-buttons">
          <Link to="/login" className="btn btn-primary">
            Login
          </Link>
          <Link to="/register" className="btn btn-secondary">
            Register
          </Link>
        </div>
      </div>
    );
  }

  return (
    <>
      <h1>My Property Listings ({listings.length})</h1>

      {listings.length > 0 ? (
        <div className="listings-container">
          {listings.map((listing) => (
            <div key={listing._id}>
              <ListingCard
                listing={listing}
                onDelete={onDelete}
                user={user}
              />
            </div>
          ))}
        </div>
      ) : (
        <p className="empty-message">
          You don't have any listings yet. <Link to="/add">Add one now!</Link>
        </p>
      )}
    </>
  );
};

export default HomePage;
