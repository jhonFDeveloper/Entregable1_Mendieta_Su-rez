alert(`¡Bienvenidos a JF Technology! Tienda de accesorios tecnológicos para computadores. 💻 `);


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
  
  console.log(`En este paso se mostrará el menú con los productos disponibles, el Usuario 
               deberá escoger uno por medio del número`);
  
  let menu = "Selecciona un producto ingresando su número:\n (Ejemplo: al ingresar el #4 seleccionas Mouse logitech).\n\n";

  productos.forEach(product =>{
    menu += `${product.id}. ${product.nombre} => 💰$${product.precio}💰.\n`
  });
 
  return parseFloat(prompt(menu));  
}

function agregarAlCarrito (idProducto) {

  const producto = productos.find(product => product.id === idProducto);
  
  if (producto) {

    let cantidad = parseFloat(prompt(`¿Cuántas unidades de ${producto.nombre} deseas adquirír? 🤔`));

    if (isNaN(cantidad) || cantidad <= 0) {
      alert(`El Valor que Ingresaste no es Válido`);
      console.log(`El Valor que Ingresaste no es Válido`);      
      return;
    }

    carrito.push({...producto, cantidad}); // spread operator (...) 
    // producto = { id: 1, nombre: "Procesador Ryzen 7 5800X", precio: 1250000 }

    alert(`Has agregado al 🛒 ${cantidad} ${producto.nombre} por un valor de: $${producto.precio * cantidad}`);
    console.log(`Has agregado al 🛒 ${cantidad} ${producto.nombre} por un valor de: $${producto.precio * cantidad}`);

  }else {
    alert(`Producto no válido 😟`);
  }
}

function calcularTotal () {
  return carrito.reduce((acumulador, produ) => acumulador + produ.precio * produ.cantidad, 0); 
}

function mostrarResumen () {
  
  if (carrito.length === 0) {
    alert(`Tu carrito está vacío 😔`);
    console.log(`Tu carrito está vacío 😔`);
    return;
  }
 
  let resumen = "Este es el Resumen de tu Compra:\n\n";

  carrito.forEach((prod, indice) => {
   resumen += `${indice + 1}. ${prod.nombre} x ${prod.cantidad} - $${prod.precio * prod.cantidad}\n`;
  });

  resumen += `\nTotal a pagar: $${calcularTotal()}`;

  alert(resumen);
  console.log(resumen);

}

function simuladorCarrito() {
  do {
    const opcion = mostrarProductos();
    agregarAlCarrito(opcion);
  } while (confirm("¿Deseas agregar otro producto?"));

  mostrarResumen();
}

// Llamada inicial
simuladorCarrito();

alert(`Gracias por tu compra ☺`);
console.log(`Gracias por tu compra ☺`);

