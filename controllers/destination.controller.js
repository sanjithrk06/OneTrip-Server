// const Destination = require('../models/destination.model.js')
import { Destination } from "../models/destination.model.js";

// Get destination details by name
export const getDestinationByName = async (req, res) => {
  const name  = "munnar";
  console.log(name);

  try {
    const destination = await Destination.findOne({ name });
    // console.log(destination)
    if (!destination) {
      return res.status(404).json({ message: 'Destination not found' });
    }
    res.status(200).json({ data:destination});
  } catch (error) {
    console.log(error.message)
    res.status(500).json({ message: 'Server error', error });
  }
};

// Create a new destination
export const createDestination = async (req, res) => {
  const { name, title, subTitle, imgSrc, stays, gallery, about, spots } = req.body;

  try {
    const existingDestination = await Destination.findOne({ name });
    if (existingDestination) {
      return res.status(400).json({ message: "Destination already exists" });
    }

    const newDestination = new Destination({
      name,
      title,
      subTitle,
      imgSrc,
      stays,
      gallery,
      about,
      spots,
    });

    await newDestination.save();
    res.status(201).json({ message: "Destination created successfully", data: newDestination });
  } catch (error) {
    console.error("Error creating destination:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a destination by name
export const updateDestination = async (req, res) => {
  const { name } = req.params;
  const updates = req.body;

  try {
    const updatedDestination = await Destination.findOneAndUpdate(
      { name },
      { $set: updates },
      { new: true } // Return the updated document
    );

    if (!updatedDestination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json({ message: "Destination updated successfully", data: updatedDestination });
  } catch (error) {
    console.error("Error updating destination:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a destination by name
export const deleteDestination = async (req, res) => {
  const { name } = req.params;

  try {
    const deletedDestination = await Destination.findOneAndDelete({ name });

    if (!deletedDestination) {
      return res.status(404).json({ message: "Destination not found" });
    }

    res.status(200).json({ message: "Destination deleted successfully", data: deletedDestination });
  } catch (error) {
    console.error("Error deleting destination:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all destinations
export const getAllDestinations = async (req, res) => {
  try {
    const destinations = await Destination.find();

    if (destinations.length === 0) {
      return res.status(404).json({ message: "No destinations found" });
    }

    res.status(200).json({ data: destinations });
  } catch (error) {
    console.error("Error retrieving destinations:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};
