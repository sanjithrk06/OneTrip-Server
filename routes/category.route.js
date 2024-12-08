import express from "express";
import { createCategory, getCategoryByName, updateCategory, deleteCategory, getAllCategories } from "../controllers/category.controller.js";

const router = express.Router();

// Create a new category
router.post("/create", createCategory);

// Get a category by name
router.get("/:name", getCategoryByName);

// Get all categories
router.get("/", getAllCategories);

// Update a category by name
router.put("/:name", updateCategory);

// Delete a category by name
router.delete("/:name", deleteCategory);

export default router;
