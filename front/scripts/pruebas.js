// // const renderCards = require("./renderCards");
// const getPersonajeAsync = async function () {
//   try {
//     //* Código asíncrono
//     const respuesta = await fetch("https://students-api.2.us-1.fl0.io/movies");
//     const data = await respuesta.json();
//     //creo un array que recorre el array de objetos y lo paso por argumento a la funcion! como resultado array de elementos HTML
//     const peliculas = data.map((elemento) => mapeo(elemento));

//     // recorro el array y agrego cada elemento html al contenedor.
//     peliculas.forEach((pelicula) => {
//       container.appendChild(pelicula);
//     });
//   } catch (error) {
//     alert("inconvenientes con el servidor");
//   }
// };

// getPersonajeAsync();
// Importa Axios

// // !
// const axios = require("axios");
// async function getMovies() {
//   try {
//     const response = await axios.get(
//       "https://students-api.2.us-1.fl0.io/movies"
//     );
//     console.log(response.data);
//   } catch (error) {
//     console.log("Error en el servidor");
//   }
// }

// getMovies();
