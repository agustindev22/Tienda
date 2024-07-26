let productosEnCarrito =localStorage.getItem("productos-en-carrito");
productosEnCarrito=JSON.parse(productosEnCarrito);
const contenedorCarritoVacio = document.querySelector("#carrito-vacio");
const contenedorProductos = document.querySelector("#carrito-productos");
const contenedorCarritoAcciones = document.querySelector("#carrito-acciones");
let   botonesEliminar = document.querySelectorAll(".carrito-eliminar");
const botonVaciar=document.querySelector("#carrito-acciones-vaciar");
const contenedorTotal=document.querySelector("#total");
const botonComprar = document.querySelector("#carrito-acciones-comprar");


function cargarProductosCarrito(){
    
    if (productosEnCarrito && productosEnCarrito.length > 0) {
       
        contenedorCarritoVacio.classList.add("disabled");
        contenedorProductos.classList.remove("disabled");
        contenedorCarritoAcciones.classList.remove("disabled");
        contenedorProductos.innerHTML="";
    
        productosEnCarrito.forEach(producto => {
    
            const div = document.createElement("div");
            div.classList.add("carrito-producto");
            div.innerHTML = `
                     <img  src="${producto.imagen}" width="100" alt="${producto.titulo}">
    
                            <div class="carrito-titulo">
                                <small>Titulo</small>
                                <h3>${producto.titulo}</h3>
                            </div>
    
                            <div class="carrito-cantidad">
                                <small>Cantidad</small>
                                <p>${producto.cantidad}</p>
                            </div>
    
                            <div class="carrito-precio">
                                <small>Precio</small>
                                <p>$${producto.precio}</p>
                            </div>
    
                            <div class="carrito-subtotal">
                                <small>Subtotal</small>
                                <p>$${producto.precio * producto.cantidad}</p>
                            </div>
    
                            <button class="carrito-eliminar" id="${producto.id}"><i class="bi bi-trash"></i></button>
            `;
      contenedorProductos.append(div);
        });
    
    } else {
        contenedorCarritoVacio.classList.remove("disabled");
        contenedorProductos.classList.add("disabled");
        contenedorCarritoAcciones.classList.add("disabled");
    }
    actualizarBotonesEliminar();
    actualizarTotal();
}
cargarProductosCarrito();

function actualizarBotonesEliminar(){
    botonesEliminar = document.querySelectorAll(".carrito-eliminar")
    botonesEliminar.forEach(boton =>{
        boton.addEventListener("click", eliminarDelCarrito);
    });
}
function eliminarDelCarrito(e){
    const idBoton = e.currentTarget.id;
    const index=productosEnCarrito.findIndex(producto=>producto.id===idBoton);
    productosEnCarrito.splice(index, 1);
    cargarProductosCarrito();

    localStorage.setItem("productos-en-carrito",JSON.stringify( productosEnCarrito));
}

botonVaciar.addEventListener("click",vaciarCarrito);

function vaciarCarrito(){
    productosEnCarrito.length=0;
    localStorage.setItem("productos-en-carrito",JSON.stringify( productosEnCarrito));
   cargarProductosCarrito();
}

function actualizarTotal(){
    const totalCalculado = productosEnCarrito.reduce((acc, producto)=>acc+(producto.precio*producto.cantidad),0);
    total.innerText=`$${totalCalculado}`;
}

botonComprar.addEventListener("click",comprarCarrito);

function comprarCarrito() {
    // Obtener la lista de productos comprados del localStorage
    const productosEnCarrito = JSON.parse(localStorage.getItem("productos-en-carrito")) || [];

    // Generar el mensaje con la lista de productos y precios
    let mensaje = "He realizado una compra con los siguientes productos:\n";

    productosEnCarrito.forEach(producto => {
        mensaje += `- ${producto.titulo}: $${producto.precio}\n`;
    });

    // Añadir información adicional, como el total del carrito
    mensaje += `\nTotal: $${calcularTotalCarrito(productosEnCarrito)}`;

    // Número de teléfono al que se enviará el mensaje (incluyendo código de país)
    const numeroTelefono = "";  // Reemplaza con el número deseado

    // Generar el enlace de WhatsApp con el número y el mensaje
    const linkWhatsApp = `https://wa.me/${numeroTelefono}?text=${encodeURIComponent(mensaje)}`;

    // Redirigir a WhatsApp
    window.location.href = linkWhatsApp;

    // Vaciar el array de productos en el carrito y actualizar localStorage
    localStorage.setItem("productos-en-carrito", JSON.stringify([]));

    // Ocultar elementos relacionados con el carrito vacío y productos
    contenedorCarritoVacio.classList.add("disabled");
    contenedorProductos.classList.add("disabled");
    contenedorCarritoAcciones.classList.add("disabled");
}

function calcularTotalCarrito(productos) {
    // Función para calcular el total del carrito sumando los precios de los productos
    let total = 0;
    productos.forEach(producto => {
        total += parseFloat(producto.precio);
    });
    return total.toFixed(2);  // Devolver el total con dos decimales
}

