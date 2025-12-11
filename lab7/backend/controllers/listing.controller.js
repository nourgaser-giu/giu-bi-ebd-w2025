import Listing from "../models/Listing.js";
import createError from "../utils/createError.js";

async function getListings(req, res, next) {
  const userId = req.user.id;
  const userRole = req.user.role;

  try {
    let listings;

    if (userRole === "admin") {
      listings = await Listing.find();
    } else {
      listings = await Listing.find({ userId: userId });
    }

    res.status(200).json(listings);
  } catch (err) {
    next(createError(500, "Error fetching listings"));
  }
}

async function createListing(req, res, next) {
  try {
    const newListing = new Listing({
      ...req.body,
      userId: req.user.id,
    });

    await newListing.save();
    res
      .status(201)
      .json({ message: "Listing added successfully", listing: newListing });
  } catch (err) {
    next(createError(500, "Error adding listing"));
  }
}

async function updateListing(req, res, next) {
  const listingId = req.params.id;
  const userId = req.user.id;
  const userRole = req.user.role;

  try {
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return next(createError(404, "Listing not found"));
    }

    const isOwner = listing.userId.toString() === userId;
    if (userRole !== "admin" && !isOwner) {
      return next(
        createError(403, "Forbidden. You can only update your own listings.")
      );
    }

    const updatedListing = await Listing.findByIdAndUpdate(
      listingId,
      req.body,
      { new: true }
    );

    res.status(200).json({
      message: "Listing updated successfully",
      listing: updatedListing,
    });
  } catch (err) {
    next(createError(500, "Error updating listing"));
  }
}

async function deleteListing(req, res, next) {
  const listingId = req.params.id;
  const userId = req.user.id;
  const userRole = req.user.role;

  try {
    const listing = await Listing.findById(listingId);
    if (!listing) {
      return next(createError(404, "Listing not found"));
    }

    const isOwner = listing.userId.toString() === userId;
    if (userRole !== "admin" && !isOwner) {
      return next(
        createError(403, "Forbidden. You can only delete your own listings.")
      );
    }

    await Listing.findByIdAndDelete(listingId);

    res.status(200).json({ message: "Listing deleted successfully" });
  } catch (err) {
    next(createError(500, "Error deleting listing"));
  }
}

async function deleteAllListings(req, res, next) {
  try {
    const result = await Listing.deleteMany({});
    res.status(200).json({
      message: `Successfully deleted all ${result.deletedCount} listings. (Admin Action)`,
    });
  } catch (err) {
    next(createError(500, "Error deleting all listings"));
  }
}

export {
  getListings,
  createListing,
  updateListing,
  deleteListing,
  deleteAllListings,
};
