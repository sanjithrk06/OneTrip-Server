// const Destination = require('../models/destination.model.js')
import { Destination } from "../models/destination.model.js";

// Get destination details by name
export const getDestinationByName = async (req, res) => {
  const name  = "taj";
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