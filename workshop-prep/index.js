// A simple Express server for managing property listings

import express from "express";
const app = express();

// Middleware: lets us read JSON from the request body
app.use(express.json());

// In-memory "database" for listings
let listings = [
    { id: 1, title: "Cozy Apartment", location: "Downtown", price: 100, available: true }
];
let currentId = 2;

// Helper functions
const addListing = (listing) => {
    listing.id = currentId;
    listings.push(listing);
    currentId++;
};

const removeListing = (id) => {
    listings = listings.filter(listing => listing.id !== id);
};

const updateListing = (updatedListing) => {
    const listing = listings.find(l => l.id === updatedListing.id);
    if (listing) {
        ['title', 'location', 'price', 'available'].forEach(field => {
            if (updatedListing[field] !== undefined) {
                listing[field] = updatedListing[field];
            }
        });
    }
};

// Routes

// Home page
app.get("/", (req, res) => {
    res.send("Property Listings API is running!");
});

// Get all listings
app.get("/api/listings", (req, res) => {
    res.json(listings);
});

// Add a new listing
app.post("/api/listings", (req, res) => {
    const newListing = req.body;
    addListing(newListing);
    res.json({ message: "Listing added", listings });
});

// Update a listing
app.put("/api/listings/:id", (req, res) => {
    const id = parseInt(req.params.id);
    const updatedListing = { id: id, ...req.body };
    updateListing(updatedListing);
    res.json({ message: "Listing updated", listings });
});

// Delete a listing
app.delete("/api/listings/:id", (req, res) => {
    const id = parseInt(req.params.id);
    removeListing(id);
    res.json({ message: "Listing removed", listings });
});

// Start the server
app.listen(3000, () => {
    console.log("Server is running on http://localhost:3000");
});