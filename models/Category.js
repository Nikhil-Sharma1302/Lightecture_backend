import mongoose from "mongoose";

const categorySchema =
  new mongoose.Schema(
    {
      title: String,
      image: String,
      description: String,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Category",
  categorySchema
);