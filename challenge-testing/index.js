class CarritoCompra {
  constructor() {
    this.carrito = [];
  }

  agregarProducto(producto) {
    this.carrito.push(producto);
  }

  calcularTotal() {
    let total = 0;

    //! recorro el array de objetos.
    for (let i = 0; i < this.carrito.length; i++) {
      //! recorro el key de cada objeto y lo comparo para dar con el key precio.

      for (const key in this.carrito[i]) {
        if (key === "precio") {
          total += this.carrito[i][key];
        }
      }
    }
    //! sumo cada value del key precio, lo guardo en la variable total y la retorno
    // console.log(total);
    return total;
  }

  aplicarDescuento(porcentaje) {
    // ! se guarda en la nueva variable total, el valor que retorna el metodo calcularTotal.
    const total = this.calcularTotal();

    const descuento = (total * porcentaje) / 100;

    const totalConDescuento = total - descuento;
    // ! sacamos el valor del descuento y lo restamos al total. Retornamos el total con el descuento realizado.
    // console.log(totalConDescuento);
    return totalConDescuento;
  }
}

module.exports = CarritoCompra;
