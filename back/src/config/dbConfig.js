const mongoose = require("mongoose");

const ATLAS_URI =
  "mongodb+srv://leandromortarini:13g99190@cluster0.oursjab.mongodb.net/movies?retryWrites=true&w=majority";

const dbConfig = async () => {
  await mongoose.connect(ATLAS_URI);
};

module.exports = dbConfig;
