const express = require("express");
const router = require("./routes/moviesRoutes");
const morgan = require("morgan");
const cors = require("cors");
const app = express();
// aca estamos creando una nueva instancia de express

app.use(morgan("dev"));
// recibe solicitudes de cualquier lugar 'cors'
app.use(cors());
// express.json() convierte todo lo que pase en js
app.use(express.json());

app.use((req, res, next) => {
  console.log("estamos pasando por mi propio middleware");
  next();
});

// luego de todos los pasos pasa por app.use(router)
app.use(router);
// usamos app.use para que todas las solicitudes pasen primero por las rutas.

module.exports = app;
