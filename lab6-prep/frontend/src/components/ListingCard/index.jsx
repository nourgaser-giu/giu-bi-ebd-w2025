import "./style.css";

const ListingCard = ({ listing, onDelete }) => {
  const { title, description, image_url, pricePerNight } = listing;

  return (
    <div className="listing-card">
      <img src={image_url} alt={title} className="card-image" />
      <div className="card-content">
        <h3>{title}</h3>
        <p>{description}</p>
        <p className="price">Price: {pricePerNight} EGP / night</p>

        <button onClick={() => onDelete(listing._id)} className="delete-button">
          Delete
        </button>
      </div>
    </div>
  );
};

export default ListingCard;
