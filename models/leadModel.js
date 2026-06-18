import mongoose from "mongoose";

const leadSchema = new mongoose.Schema(
  {
    name: {
      type: String,
      required: true,
    },

    mobile: {
      type: String,
      required: true,
    },

    email: String,

    projectType: String,

    budget: String,

    message: String,
  },
  {
    timestamps: true,
  }
);

export default mongoose.model(
  "Lead",
  leadSchema
);