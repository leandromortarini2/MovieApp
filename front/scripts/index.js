const mapeo = require("./renderCards");
const createMovie = require("./form");

const axios = require("axios");
const container = document.getElementById("container");

async function getMovies() {
  try {
    const { data } = await axios.get("http://localhost:3000/movies");

    const peliculas = await data.map((elemento) => mapeo(elemento));

    peliculas.forEach((pelicula) => {
      container?.appendChild(pelicula);
    });
  } catch ({ message }) {
    alert(message);
  }
}

function limpiarFormulario() {
  var inputs = document.querySelectorAll(
    "input[type='text'], input[type='number'], input[type='url']"
  );
  inputs.forEach(function (input) {
    input.value = "";
  });
}

document.addEventListener("DOMContentLoaded", () => {
  getMovies();
  var btnEnviar = document.getElementById("btnEnviar");
  var btnLimpiar = document.getElementById("btnLimpiar");
  btnLimpiar?.addEventListener("click", limpiarFormulario);
  btnEnviar?.addEventListener("click", createMovie);
});
