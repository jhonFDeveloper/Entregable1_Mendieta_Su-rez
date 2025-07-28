alert(`¡Bienvenidos a JF Tecnology! tienda de accesorios tecnológicos para computadores. 💻 `);

// Array de productos disponibles
const productos = [
  { id: 1, nombre: "Procesador Ryzen 7 5800X", precio: 1250000 },
  { id: 2, nombre: "SSD M.2 Kingston 512 GB", precio: 180000 },
  { id: 3, nombre: "Cámara Web logitech c920", precio: 250000 },
  { id: 4, nombre: "Mouse logitech G502", precio: 95000 },
  { id: 5, nombre: "Teclado logitech K950", precio: 140000 },
  { id: 6, nombre: 'Monitor LG FULL HD 24"', precio: 550000 }
];

let carrito = [];


function mostrarProductos () {

  let menu = "Selecciona un producto seleccionando su número:\n\n";

  productos.forEach(product =>{
    menu += `${product.id}. ${product.nombre} => 💰$${product.precio}💰.\n`
  });

  return parseFloat(prompt(menu));
}

mostrarProductos();