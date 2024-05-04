const axios = require("axios");

function validateForm({
  title,
  year,
  director,
  duration,
  genre,
  rate,
  poster,
}) {
  if (
    !title ||
    !year ||
    !director ||
    !duration ||
    !genre ||
    !rate ||
    !poster.length
  )
    return "Todos los campos son obligatorios";
  if (director.length < 5 || director.length > 50)
    return "Director debe tener entre 5 y 50 caracteres";
  if (isNaN(rate) || rate < 1 || rate > 10)
    return "El rating debe ser un numero entre 1 y 10";
  if (!poster.includes("https://")) return "El poster debe ser una URL valida";
  return null;
}

function createMovie() {
  var title = document.getElementById("title").value;
  var year = document.getElementById("year").value;
  var director = document.getElementById("director").value;
  var duration = document.getElementById("duration").value;
  var genre = document.getElementById("genre").value.split(" ");
  var rate = document.getElementById("rate").value;
  var url = document.getElementById("url").value;

  // Creacion de objeto
  const newMovie = {
    title: title,
    year: year,
    director: director,
    duration: duration,
    genre: genre,
    rate: rate,
    poster: url,
  };
  // Validar Datos
  const error = validateForm(newMovie);
  if (error) return alert(error);

  console.log(newMovie);

  // PETICION AL BACK END
  axios
    .post("http://localhost:3000/movies", newMovie)
    .then(() => alert("Pelicula creada!!!"))
    .catch((error) => alert("error al crear la pelicula"));
}

module.exports = createMovie;
