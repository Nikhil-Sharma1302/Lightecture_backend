import Lead from "../models/leadModel.js";

export const getLeads = async (
  req,
  res
) => {
  try {
    const leads =
      await Lead.find().sort({
        createdAt: -1,
      });

    res.json(leads);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const createLead = async (
  req,
  res
) => {
  try {
    const lead =
      await Lead.create(req.body);

    res.status(201).json(lead);
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};

export const deleteLead = async (
  req,
  res
) => {
  try {
    await Lead.findByIdAndDelete(
      req.params.id
    );

    res.json({
      message:
        "Lead deleted",
    });
  } catch (error) {
    res.status(500).json({
      message: error.message,
    });
  }
};