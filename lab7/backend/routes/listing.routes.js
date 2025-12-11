import { Router } from "express";
import * as listingController from "../controllers/listing.controller.js";
import { verifyToken, verifyAdmin } from "../middleware/auth.js";

const router = Router();

router.get("/", verifyToken, listingController.getListings);

router.post("/", verifyToken, listingController.createListing);

router.put("/:id", verifyToken, listingController.updateListing);

// Needs to be before the DELETE /:id route to avoid conflict; otherwise, "deleteAll" would be treated as an ID in the DELETE /:id route (see next route)
router.delete(
  "/deleteAll",
  verifyToken,
  verifyAdmin,
  listingController.deleteAllListings
);

router.delete("/:id", verifyToken, listingController.deleteListing);

export default router;
