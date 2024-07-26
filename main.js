const productos = [
    {
        id: "Sabanas-01",
        titulo: "Saba/Azul-Claro",
        imagen: "./img/sabanas/sabana-azul-claro.jpg",
        categoria: {
            nombre: "Sabanas",
            id: "sabanas"
        },
        precio: "55000"
    },
    {
        id: "Sabanas-02",
        titulo: "Saba/Blanca",
        imagen: "./img/sabanas/sabana-blanca.jpg",
        categoria: {
            nombre: "sabanas",
            id: "sabanas"
        },
        precio: "55000"
    },
    {
        id: "Sabanas-03",
        titulo: "Saba/Negro",
        imagen: "./img/sabanas/sabana-negro.jpg",
        categoria: {
            nombre: "sabanas",
            id: "sabanas"
        },
        precio: "55000"
    },
    {
        id: "Sabanas-04",
        titulo: "Saba/Rojo",
        imagen: "./img/sabanas/sabana-rojo.jpg",
        categoria: {
            nombre: "sabanas",
            id: "sabanas"
        },
        precio: "55000"
    },
    {
        id: "Sabanas-05",
        titulo: "Saba/Violeta",
        imagen: "./img/sabanas/sabana-violeta.jpg",
        categoria: {
            nombre: "sabanas",
            id: "sabanas"
        },
        precio: "55000"
    },
    {
        id: "Sabanas-06",
        titulo: "Sanba/Vino",
        imagen: "./img/sabanas/sabana-vino.jpg",
        categoria: {
            nombre: "sabanas",
            id: "sabanas"
        },
        precio: "55000"
    },
    //FRAZADAS
    {
        id: "Frazadas-01",
        titulo: "Frazada/Azul",
        imagen: "./img/frazadas/frazadapolar-azul.jpg",
        categoria: {
            nombre: "Frazadas",
            id: "frazadas"
        },
        precio: "130000"
    },
    {
        id: "Frazadas-02",
        titulo: "Frazada/Gris",
        imagen: "./img/frazadas/frazadapolar-gris.jpg",
        categoria: {
            nombre: "frazadas",
            id: "frazadas"
        },
        precio: "130000"
    },
    {
        id: "Frazadas-03",
        titulo: "Frazada/Marron",
        imagen: "./img/frazadas/frazadapolar-marron.jpg",
        categoria: {
            nombre: "frazadas",
            id: "frazadas"
        },
        precio: "130000"
    },
    {
        id: "Frazadas-04",
        titulo: "Frazada/Negro",
        imagen: "./img/frazadas/frazadapolar-negro.jpg",
        categoria: {
            nombre: "frazadas",
            id: "frazadas"
        },
        precio: "130000"
    },
    {
        id: "Frazadas-05",
        titulo: "Frazada/Rojo",
        imagen: "./img/frazadas/frazadapolar-rojo.jpg",
        categoria: {
            nombre: "frazadas",
            id: "frazadas"
        },
        precio: "130000"
    },
                            //ACOLCHADOS
    {
        id: "Acolchados-01",
        titulo: "Acolchado/Blanco",
        imagen: "./img/acolchados/acolchado-blanco.jpg",
        categoria: {
            nombre: "Acolchados",
            id: "acolchados"
        },
        precio: "190000"
    },
    {
        id: "Acolchados-02",
        titulo: "Acolchado/Crema",
        imagen: "./img/acolchados/acolchado-crema.jpg",
        categoria: {
            nombre: "acolchados",
            id: "acolchados"
        },
        precio: "180000"
    },
    {
        id: "Acolchados-03",
        titulo: "Acolchado/Gris",
        imagen: "./img/acolchados/acolchado-gris.jpg",
        categoria: {
            nombre: "acolchados",
            id: "acolchados"
        },
        precio: "180000"
    },
    {
        id: "Acolchados-04",
        titulo: "Acolchado/Negro",
        imagen: "./img/acolchados/acolchado-negro.jpg",
        categoria: {
            nombre: "acolchados",
            id: "acolchados"
        },
        precio: "180000"
    },
    {
        id: "Acolchados-05",
        titulo: "Acolchado/Verde",
        imagen: "./img/acolchados/Acolchado-verde.jpg",
        categoria: {
            nombre: "acolchados",
            id: "acolchados"
        },
        precio: "190000"
    }
];

const contenedorProductos = document.querySelector("#contenedor-productos");
const botonesCategorias = document.querySelectorAll(".boton-categoria");
const tituloPrincipal=document.querySelector("#titulo-principal");
let botonesAgregar=document.querySelectorAll(".producto-agregar");
const numerito = document.querySelector("#numerito");

function mostrarProductos(productosElegidos) {

    contenedorProductos.innerHTML= "";
    productosElegidos.forEach(producto => {

        const div = document.createElement("div");
        div.classList.add("producto");
        div.innerHTML = `
        <img class="producto-imagen" src="${producto.imagen}" width="260" alt="${producto.titulo}">
        <hgroup class="producto-detalles">
            <h3 class="producto-titulo">${producto.titulo}</h3>
            <p class="precio">$${producto.precio}</p>
            <select class="select" id="productos">
            <option value="producto-01"> 1 Plaza</option>
            <option value="producto-02"> 1/2 Plaza</option>
            <option value="producto-03"> 2 Plaza</option>
            <option value="producto-04"> 2/2 Plaza</option>
            </select>
            <button class="producto-agregar" id="${producto.id}">Agregar</button>
        </hgroup>
        `;
        contenedorProductos.append(div);
    });
    actualizarBotonesAgregar();
}

mostrarProductos(productos);

botonesCategorias.forEach(boton =>{
       boton.addEventListener("click",(e)=>{

            botonesCategorias.forEach(boton=> boton.classList.remove("active"));
            e.currentTarget.classList.add("active");

            if(e.currentTarget.id !="todos"){
                const productoCategoria=productos.find(producto => producto.categoria.id === e.currentTarget.id);
                tituloPrincipal.innerText=productoCategoria.categoria.nombre;
                
                const productosBoton = productos.filter(producto=>producto.categoria.id=== e.currentTarget.id);
                mostrarProductos(productosBoton);
            } else{
                tituloPrincipal.innerText="Todos los Productos";
                mostrarProductos(productos);
            }
       })
});

function actualizarBotonesAgregar(){
    botonesAgregar=document.querySelectorAll(".producto-agregar");
    botonesAgregar.forEach(boton=>{
        boton.addEventListener("click",agregarAlCarrito);
    });
}

let productosEnCarrito;
let productosEnCarritoLS=localStorage.getItem("productos-en-carrito");

if(productosEnCarritoLS){
    productosEnCarrito= JSON.parse(productosEnCarritoLS);
    actualizarNumerito();
} else{
    productosEnCarrito=[];
}


function agregarAlCarrito(e){

     const idBoton = e.currentTarget.id;
     const productoAgregado = productos.find(producto=>producto.id === idBoton);

     if(productosEnCarrito.some(producto => producto.id === idBoton)){
            const index=productosEnCarrito.findIndex(producto=>producto.id===idBoton);
            productosEnCarrito[index].cantidad++;
     } else {
         productoAgregado.cantidad=1;         
         productosEnCarrito.push(productoAgregado);
     }
     actualizarNumerito();
     localStorage.setItem("productos-en-carrito",  JSON.stringify(productosEnCarrito));
}

function actualizarNumerito(){
    let nuevoNumerito = productosEnCarrito.reduce((acc,producto)=>acc+producto.cantidad,0);
    numerito.innerText=nuevoNumerito;
}




/* 
<div class="producto">
    <img class="producto-imagen" src="img/Tommy.jpg" width="260" alt="Producto1">
        <hgroup class="producto-detalles">
            <h3 class="producto-titulo">Producto 1</h3>
            <p class="precio">$1000</p>
            <button class="producto-agregar">Agregar</button>
        </hgroup>
</div> 
*/