const {
  getMoviesServices,
  postMovie: postMovieService,
} = require("../services/movieService");

const moviesController = async (req, res) => {
  try {
    const movies = await getMoviesServices();
    res.status(200).json(movies);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

const postMovieController = async (req, res) => {
  try {
    const { title, year, director, duration, genre, rate, poster } = req.body;
    const savedMovie = await postMovieService({
      title,
      year,
      director,
      duration,
      genre,
      rate,
      poster,
    });
    res.status(201).json(savedMovie);
  } catch (error) {
    res.status(500).json({
      error: "Error interno del servidor",
    });
  }
};

module.exports = { moviesController, postMovieController };
