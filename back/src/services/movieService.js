const Movie = require("../models/movie");

module.exports = {
  getMoviesServices: async () => {
    const movie = await Movie.find();
    return movie;
  },

  postMovie: async (movie) => {
    const newMovie = new Movie(movie);
    const savedMovie = await newMovie.save();
    return savedMovie;
  },
};
