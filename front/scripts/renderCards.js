function mapeo(peliculas) {
  //  aplico destructuring para separar en variables.
  const { title, year, director, duration, genre, rate, poster } = peliculas;

  // Crear elementos, le doy clases y le doy el valor de cada variable.

  const tarjeta = document.createElement("div");
  tarjeta.className = "tarjeta";

  const h3 = document.createElement("h3");
  h3.className = "titleCard";

  const enlace = document.createElement("a");
  enlace.className = "enlaceCard btn btn-info ";
  enlace.href = "#peli " + title;
  enlace.textContent = title;
  h3.appendChild(enlace);

  const img = document.createElement("img");
  img.className = "imgCard";
  img.src = poster;

  const p1 = document.createElement("p");
  p1.className = "p1Card";
  p1.innerHTML = year;

  const p2 = document.createElement("p");
  p2.className = "p2Card";
  p2.innerHTML = director;

  const p3 = document.createElement("p");
  p3.className = "p3Card";
  p3.innerHTML = duration;

  const p4 = document.createElement("p");
  p4.className = "p4Card";
  p4.innerHTML = genre.join("-");

  const p5 = document.createElement("p");
  p5.className = "p5Card";
  p5.innerHTML = rate;

  // Añadir elementos a la tarjeta

  tarjeta.appendChild(img);
  tarjeta.appendChild(h3);
  tarjeta.appendChild(p1);
  tarjeta.appendChild(p2);
  tarjeta.appendChild(p3);
  tarjeta.appendChild(p4);
  tarjeta.appendChild(p5);

  return tarjeta;
}

module.exports = mapeo;
