import express from "express";

import {
  getLeads,
  createLead,
  deleteLead,
} from "../controllers/leadController.js";

import protect from "../middleware/authMiddleware.js";

const router =
  express.Router();

router
  .route("/")
  .get(protect, getLeads)
  .post(createLead);

router
  .route("/:id")
  .delete(protect, deleteLead);

export default router;