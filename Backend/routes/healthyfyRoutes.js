import express from "express";
import { getHealthyfy, getHealthyfyById, createHealthyfy, deleteHealthyfy } from "../controllers/healthyfyController.js";

const router = express.Router();

router.get("/", getHealthyfy);          
router.get("/:id", getHealthyfyById);   
router.post("/", createHealthyfy);
router.delete("/:id", deleteHealthyfy);

export default router;
