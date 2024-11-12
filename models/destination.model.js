// models/Destination.js
import mongoose from "mongoose";

const StaySchema = new mongoose.Schema({
  name: String,
  price: String,
  beds: Number,
  baths: Number,
  wifi: Boolean,
  capacity: Number,
  distance: String,
  time: String,
  hours: String,
  location: String,
  imgSrc: String
});

const SpotSchema = new mongoose.Schema({
  title: String,
  imgSrc: String,
  alt: String,
  location: String,
  route: String
});

const DestinationSchema = new mongoose.Schema({
  name: { type: String, required: true, unique: true }, 
  title: String,
  subTitle: String,
  imgSrc: String,
  stays: [StaySchema],
  gallery: [String], // Array of image URLs
  about: String,
  spots: [SpotSchema]
});

export const Destination = mongoose.model('Destination', DestinationSchema);
