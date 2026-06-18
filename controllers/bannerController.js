import Banner from "../models/Banner.js";

export const getBanners = async (
  req,
  res
) => {
  const banners =
    await Banner.find();

  res.json(banners);
};

export const createBanner =
  async (req, res) => {
    const banner =
      await Banner.create(req.body);

    res.status(201).json(
      banner
    );
  };

export const updateBanner =
  async (req, res) => {
    const banner =
      await Banner.findByIdAndUpdate(
        req.params.id,
        req.body,
        {
          new: true,
        }
      );

    res.json(banner);
  };

export const deleteBanner =
  async (req, res) => {
    await Banner.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Banner Deleted",
    });
  };