const app = require("./src/server");
const dbConfig = require("./src/config/dbConfig");

dbConfig().then((res) =>
  app.listen(3000, () => {
    console.log("servidor escuchando en el puerto 3000");
  })
);

//inicia el servidor para que escuche las solicitudes en el puerto 3000 y muestra un mensaje en la consola
