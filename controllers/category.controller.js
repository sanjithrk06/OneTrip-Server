import { Category } from "../models/category.model.js";
import { Destination } from "../models/destination.model.js";

// Create a new category
export const createCategory = async (req, res) => {
  const { name, description } = req.body;

  try {
    const existingCategory = await Category.findOne({ name });
    if (existingCategory) {
      return res.status(400).json({ message: "Category already exists" });
    }

    const newCategory = new Category({
      name,
      description,
      destinations: [],  // Initially no destinations
    });

    await newCategory.save();
    res.status(201).json({
      message: "Category created successfully",
      data: newCategory,
    });
  } catch (error) {
    console.error("Error creating category:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get a category by name
export const getCategoryByName = async (req, res) => {
  const { name } = req.params;

  try {
    const category = await Category.findOne({ name }).populate("destinations");

    if (!category) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({ data: category });
  } catch (error) {
    console.log(error.message);
    res.status(500).json({ message: "Server error", error });
  }
};

// Get all categories
export const getAllCategories = async (req, res) => {
  try {
    const categories = await Category.find().populate("destinations");

    if (categories.length === 0) {
      return res.status(404).json({ message: "No categories found" });
    }

    res.status(200).json({ data: categories });
  } catch (error) {
    console.error("Error retrieving categories:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};

// Update a category by name
export const updateCategory = async (req, res) => {
  const { name } = req.params;
  const updates = req.body;

  try {
    const updatedCategory = await Category.findOneAndUpdate(
      { name },
      { $set: updates },
      { new: true } // Return the updated document
    );

    if (!updatedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category updated successfully",
      data: updatedCategory,
    });
  } catch (error) {
    console.error("Error updating category:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};

// Delete a category by name
export const deleteCategory = async (req, res) => {
  const { name } = req.params;

  try {
    const deletedCategory = await Category.findOneAndDelete({ name });

    if (!deletedCategory) {
      return res.status(404).json({ message: "Category not found" });
    }

    res.status(200).json({
      message: "Category deleted successfully",
      data: deletedCategory,
    });
  } catch (error) {
    console.error("Error deleting category:", error.message);
    res.status(500).json({ message: "Server error", error });
  }
};
