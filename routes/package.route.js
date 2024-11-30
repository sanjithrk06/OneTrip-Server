import express from "express";
import { packageController } from "../controllers/controller.js";

const router = express.Router();

router.get("/", packageController.getAllPackages);
router.get("/:id", packageController.getPackage);
router.post("/", packageController.createPackage);
router.put("/:id", packageController.updatePackage);
router.delete("/:id", packageController.deletePackage);

export default router;
