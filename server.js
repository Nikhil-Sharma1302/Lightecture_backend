import express from "express";
import cors from "cors";
import dotenv from "dotenv";

import connectDB from "./config/db.js";

import authRoutes from "./routes/authRoutes.js";
import bannerRoutes from "./routes/bannerRoutes.js";
import productRoutes from "./routes/productRoutes.js";
import categoryRoutes from "./routes/categoryRoutes.js";
import aboutRoutes from "./routes/aboutRoutes.js";
import testimonialRoutes from "./routes/testimonialRoutes.js";
import blogRoutes from "./routes/blogRoutes.js";
import leadRoutes from "./routes/leadRoutes.js";

dotenv.config();



connectDB();

const app = express();

/* Middleware */

app.use(cors());
app.use(express.json());

/* Routes */

app.get("/", (req, res) => {
  res.send(
    "Lightecture API Running"
  );
});

app.use(
  "/api/auth",
  authRoutes
);
app.use(
  "/api/products",
  productRoutes
);

app.use(
  "/api/categories",
  categoryRoutes
);

app.use(
  "/api/about",
  aboutRoutes
);

app.use(
  "/api/testimonials",
  testimonialRoutes
);

app.use(
  "/api/leads",
  leadRoutes
);

app.use(
  "/api/banners",
  bannerRoutes
);

app.use(
  "/api/blogs",
  blogRoutes
);

/* Server */

const PORT =
  process.env.PORT || 5000;

app.listen(PORT, () => {
  console.log(
    `Server Running On ${PORT}`
  );
});