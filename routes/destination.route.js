import express from 'express';
import { getDestinationByName,
    updateDestination,
    createDestination,
    getAllDestinations,
    deleteDestination
 } from '../controllers/destination.controller.js';

const router = express.Router();

router.post("/create", createDestination); // Create
router.get('/single-page/:name', getDestinationByName); // Read(by Name)
router.get("/", getAllDestinations); // Read (all)
router.put("/:name", updateDestination); // Update
router.delete("/:name", deleteDestination); // Delete

export default router;
