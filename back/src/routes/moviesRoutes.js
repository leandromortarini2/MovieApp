const { Router } = require("express");

// estamos importando el objeto Router del módulo express, nos permite crear un nuevo enrutador.para manejar las rutas en nuestra aplicación web.
const {
  moviesController,
  postMovieController,
} = require("../controllers/moviesControllers");
const router = Router();
// aca estamos creando una nueva instancia de un enrutador

router.get("/movies", moviesController);
router.post("/movies", postMovieController);
// aca definiendo una ruta GET, primer parametro la url, 2do parametro funcion a ejecutarce.

module.exports = router;
