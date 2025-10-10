import express from "express";

const app = express();

// Tell express to parse JSON request bodies using the json middleware
app.use(express.json())

app.get("/", (req, res) => {
    res.send("Hello world")
})

// Database (simulated)
let listings = [
    {
        id: 1,
        title: "Lake View Penthouse",
        pricePerNight: 1200,
    },
    {
        id: 2,
        title: "Ground Floor with Garden",
        pricePerNight: 500,
    },
    {
        id: 3,
        title: "200m Apartment 3rd Floor",
        pricePerNight: 750,
    }
]
let currentMaxId = 3;

// Controllers
const addListing = (listing) => {
    listing.id = ++currentMaxId;
    listings.push(listing)
}

const removeListing = listingId => {
    listings = listings.filter(listing => listing.id != listingId)
}

const updateListing = (listingId, updatedListing) => {
    listings.forEach(listing => {
        if (listing.id == listingId) {
            if (updatedListing.pricePerNight) listing.pricePerNight = updatedListing.pricePerNight
            if (updatedListing.title) listing.title = updatedListing.title
        }
    })
}

// API Endpoints (Routes)
app.get("/api/listings", (req, res) => {
    res.json(listings);
})

app.post("/api/listings", (req, res) => {
    addListing(req.body)
    res.sendStatus(200);
})

app.put("/api/listings/:id", (req, res) => {
    const id = req.params.id;
    const listing = req.body;
    updateListing(id, listing);
    res.sendStatus(200);
})

app.delete("/api/listings/:id", (req, res) => {
    const id = req.params.id;
    removeListing(id);
    res.sendStatus(200);
})

app.listen(3000, () => {
    console.log("Listening on http://localhost:3000/")
})