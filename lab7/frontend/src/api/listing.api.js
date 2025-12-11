const API_BASE = "http://localhost:3000/api";

export const listingAPI = {
  getListings: async () => {
    const response = await fetch(`${API_BASE}/listings`, {
      credentials: "include",
    });

    if (!response.ok) {
      throw new Error("Failed to fetch listings");
    }

    return await response.json();
  },

  createListing: async (listing) => {
    const response = await fetch(`${API_BASE}/listings`, {
      method: "POST",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(listing),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to create listing");
    }

    return await response.json();
  },

  updateListing: async (id, listing) => {
    const response = await fetch(`${API_BASE}/listings/${id}`, {
      method: "PUT",
      headers: { "Content-Type": "application/json" },
      credentials: "include",
      body: JSON.stringify(listing),
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to update listing");
    }

    return await response.json();
  },

  deleteListing: async (id) => {
    const response = await fetch(`${API_BASE}/listings/${id}`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to delete listing");
    }

    return await response.json();
  },

  deleteAllListings: async () => {
    const response = await fetch(`${API_BASE}/listings/deleteAll`, {
      method: "DELETE",
      credentials: "include",
    });

    if (!response.ok) {
      const error = await response.json();
      throw new Error(error.message || "Failed to delete all listings");
    }

    return await response.json();
  },
};
