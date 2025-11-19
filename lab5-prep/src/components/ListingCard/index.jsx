import "./style.css";

const ListingCard = ({ listing, onDelete }) => {
  const { title, description, image_url, pricePerNight } = listing;

  return (
    <div className="listing-card">
      Listing content here.
    </div>
  );
};

export default ListingCard;
