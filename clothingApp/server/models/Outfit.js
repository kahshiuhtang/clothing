const mongoose = require("mongoose");

const OutfitSchema = new mongoose.Schema(
  {
    hat: {},
    jackets: {},
    shirt: {},
    pants: {},
    shoes: {},
  },
  {
    timestamps: true,
  }
);

module.exports = mongoose.model("Outfit", OutfitSchema);
