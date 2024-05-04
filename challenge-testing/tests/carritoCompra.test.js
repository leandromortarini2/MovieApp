const CarritoCompra = require("../index");

describe("CarritoCompra", () => {
  let carrito = 0;

  //  creo una variable para poder hacer una instancia de la clase dentro de beforeEach( se usa para ejecutar una función antes de cada prueba dentro del grupo. En este caso, estás creando una nueva instancia de CarritoCompra y asignándola a la variable carrito, asegurándote de que cada prueba comience con un carrito nuevo y limpio.)

  beforeEach(() => {
    carrito = new CarritoCompra();
  });
  // creo pruebas mediante un array de objetos, pushearlos al carrito y se espera que devuelva el total (60) y lo mismo en la aplicacion de descuento.
  test("calcularTotal debería calcular el total correctamente", () => {
    const productos = [
      { nombre: "Producto 1", precio: 10 },
      { nombre: "Producto 2", precio: 20 },
      { nombre: "Producto 3", precio: 30 },
    ];
    productos.forEach((producto) => carrito.agregarProducto(producto));
    expect(carrito.calcularTotal()).toBe(60);
  });

  test("aplicarDescuento debería aplicar el descuento correctamente", () => {
    const productos = [
      { nombre: "Producto 1", precio: 10 },
      { nombre: "Producto 2", precio: 20 },
      { nombre: "Producto 3", precio: 30 },
    ];
    productos.forEach((producto) => carrito.agregarProducto(producto));

    // Simulamos un descuento del 10%

    expect(carrito.aplicarDescuento(10)).toBe(54);
  });
});
