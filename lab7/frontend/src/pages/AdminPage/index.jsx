import { useContext, useState } from "react";
import { useNavigate } from "react-router-dom";
import { AuthContext } from "../../context/AuthContext";
import { listingAPI } from "../../api/listing.api";
import "./style.css";

const AdminPage = () => {
  const { user } = useContext(AuthContext);
  const navigate = useNavigate();
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");

  // Redirect to home if not logged in or not admin
  if (!user || user.role !== "admin") {
    return (
      <div className="admin-page">
        <div className="admin-container">
          <h1>Access Denied</h1>
          <p>You don't have permission to access this page. Admin access required.</p>
          <button onClick={() => navigate("/")} className="btn-home">
            Back to Home
          </button>
        </div>
      </div>
    );
  }

  const handleDeleteAllListings = async () => {
    const confirmed = window.confirm(
      "Are you sure you want to delete ALL listings? This action cannot be undone."
    );

    if (!confirmed) return;

    setLoading(true);
    setMessage("");

    try {
      const result = await listingAPI.deleteAllListings();
      setMessage(result.message || "All listings deleted successfully!");
      setTimeout(() => navigate("/"), 2000);
    } catch (error) {
      setMessage(`Error: ${error.message}`);
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="admin-page">
      <div className="admin-container">
        <h1>Admin Dashboard</h1>
        <p className="welcome">Welcome, <strong>{user.username}</strong> (Admin)</p>

        <div className="admin-actions">
          <h2>Dangerous Actions</h2>
          <button
            onClick={handleDeleteAllListings}
            disabled={loading}
            className="btn-delete-all"
          >
            {loading ? "Deleting..." : "Delete All Listings"}
          </button>

          {message && (
            <div className={`message ${message.startsWith("Error") ? "error" : "success"}`}>
              {message}
            </div>
          )}
        </div>

        <div className="admin-info">
          <h2>Admin Information</h2>
          <ul>
            <li>Username: <strong>{user.username}</strong></li>
            <li>Email: <strong>{user.email}</strong></li>
            <li>Role: <strong>{user.role}</strong></li>
          </ul>
        </div>
      </div>
    </div>
  );
};

export default AdminPage;
