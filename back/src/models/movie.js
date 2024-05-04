const mongoose = require("mongoose");

// se instancia un schema
const movieSchema = new mongoose.Schema({
  title: {
    type: String,
    required: true,
    unique: true,
  },
  year: {
    type: Number,
    required: true,
    min: [1895, `No hay peliculas previo a {VALUE}`],
  },
  director: String,
  duration: String,
  genre: [String],
  rate: Number,
  poster: {
    type: String,
    unique: true,
  },
});

// a model le pasamos el nombre y el schema creado.

const Movie = mongoose.model("Movie", movieSchema);

module.exports = Movie;
