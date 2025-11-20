import "./style.css";

const ListingCard = ({ listing, onDelete }) => {
  const { title, description, image_url, pricePerNight } = listing;

  return (
    <div className="listing-card">
      <img src={image_url} className="card-image" alt={title} />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p>Price: {pricePerNight} EGP / night</p>
        <div
          className="delete-button"
          onClick={() => {
            onDelete(listing._id);
          }}
        >
          Delete
        </div>
      </div>
    </div>
  );
};

export default ListingCard;
