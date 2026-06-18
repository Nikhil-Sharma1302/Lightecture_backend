import mongoose from "mongoose";

const bannerSchema =
  new mongoose.Schema(
    {
      title: String,
      subtitle: String,
      image: String,
    },
    {
      timestamps: true,
    }
  );

export default mongoose.model(
  "Banner",
  bannerSchema
);