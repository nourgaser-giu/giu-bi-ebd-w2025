// A simple Express server for managing property listings

import express from "express";
import Listing from "./models/Listing.js";
import mongoose from "mongoose";

const app = express();

// Middleware: lets us read JSON from the request body
app.use(express.json());

// Helper functions
const addListing = async (listing) => {
    // Method 1 - Immediately insert the listing
    await Listing.insertOne(listing);

    // Method 2 - Create an instance and then save when ready
    // const newListing = new Listing(listing);
    // await newListing.save();
};

const removeListing = async (id) => {
    await Listing.deleteOne({ _id: id });
};

const updateListing = async (updatedListing) => {
    await Listing.updateOne({ _id: updatedListing.id }, updatedListing);
};

// Routes

// Home page
app.get("/", (req, res) => {
    res.send("Property Listings API is running!");
});

// Get all listings
app.get("/api/listings", async (req, res) => {
    const listings = await Listing.find();
    
    res.json(listings);
});

// Add a new listing
app.post("/api/listings", async (req, res) => {
    const newListing = req.body;
    await addListing(newListing);
    res.json({ message: "Listing added" });
});

// Update a listing
app.put("/api/listings/:id", async (req, res) => {
    const id = req.params.id;
    const updatedListing = { id: id, ...req.body };
    await updateListing(updatedListing);
    res.json({ message: "Listing updated" });
});

// Delete a listing
app.delete("/api/listings/:id", async (req, res) => {
    const id = req.params.id;
    await removeListing(id);
    res.json({ message: "Listing removed" });
});

// Start the server
async function main() {
    // Connect to MongoDB
    await mongoose.connect("mongodb+srv://nouraly_db_user:99qzv5TezGlBdTpm@cluster0.4f0hpj2.mongodb.net/ebd?appName=Cluster0")
    console.log("Connected to MongoDB");

    Listing.find().then(listings => {
        console.log("Listings from MongoDB:", listings);
    }).catch(err => {
        console.error("Error fetching listings:", err);
    });

    // Once database connection is ready, start listening for requests
    app.listen(3000, () => {
        console.log("Server is running on http://localhost:3000");
    });
}

main().catch(err => console.log(err));
