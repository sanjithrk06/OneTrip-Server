import { Package } from "../models/package.model.js";

export const getAllPackages = async (req, res) => {
  try {
    const packages = await Package.find();
    if (packages.length == 0)
      res.status(200).json({ message: "No Packages Found" });
    else res.status(200).json(packages);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch packages", error });
  }
};

export const getPackage = async (req, res) => {
  const { id } = req.params;
  try {
    const tourPackage = await Package.findById(id);
    if (!tourPackage) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.status(200).json(tourPackage);
  } catch (error) {
    res.status(500).json({ message: "Failed to fetch package", error });
  }
};

export const createPackage = async (req, res) => {
  const packageData = req.body;
  const newPackage = new Package(packageData);
  try {
    await newPackage.save();
    res.status(201).json(newPackage);
  } catch (error) {
    res.status(400).json({ message: "Failed to create package", error });
  }
};

export const updatePackage = async (req, res) => {
  const { id } = req.params;
  const updatedData = req.body;
  try {
    const updatedPackage = await Package.findByIdAndUpdate(id, updatedData, {
      new: true,
      runValidators: true,
    });
    if (!updatedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.status(200).json(updatedPackage);
  } catch (error) {
    res.status(400).json({ message: "Failed to update package", error });
  }
};

export const deletePackage = async (req, res) => {
  const { id } = req.params;
  try {
    const deletedPackage = await Package.findByIdAndDelete(id);
    if (!deletedPackage) {
      return res.status(404).json({ message: "Package not found" });
    }
    res.status(200).json({ message: "Package deleted successfully" });
  } catch (error) {
    res.status(500).json({ message: "Failed to delete package", error });
  }
};
