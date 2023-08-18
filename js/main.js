// CONSTRUCTOR DEL USUARIO

class Usuario {
    constructor(nombre, contraseña) {
        this.nombre = nombre;
        this.contraseña = contraseña;
    }
}

// ARRAY DE PRODUCTOS

const productos = [
    { id: 1, nombre: "Monitor", precio: 10000 },
    { id: 2, nombre: "Mouse", precio: 4000 },
    { id: 3, nombre: "Teclado", precio: 5000 },
    { id: 4, nombre: "Auriculares", precio: 4500 },
    { id: 5, nombre: "Procesador", precio: 40000 },
];

// VERIFICADOR SI EL USUARIO ESTA LOGEADO

const logeado = JSON.parse(localStorage.getItem("logeado"));

logeado ? mostrarCatalogo() : mostrarFormulario();

// FORMULARIO

function mostrarFormulario() {
    let usuario = document.getElementById("usuario");
    usuario.innerHTML = `
    <h2>Iniciar Sesión</h2>
    <form id="login">
    <label for="nombre">Nombre de Usuario:</label>
    <input type="text" id="nombre" required>
    <br>
    <label for="contraseña">Contraseña:</label>
    <input type="password" id="contraseña" required>
    <br>
    <button type="submit">Iniciar Sesión</button>
    </form>
    `;
    
    let loginForm = document.getElementById("login"); // EVENTO Y GUARDADO EN EL STORAGE
    loginForm.addEventListener("submit", function (e) {
        e.preventDefault();
        let nombre = document.getElementById("nombre").value;
        let contraseña = document.getElementById("contraseña").value;
        const usuario = new Usuario(nombre, contraseña);
        localStorage.setItem("logeado", JSON.stringify(usuario));
        location.reload();
    });
}

// CATÁLOGO

// SALUDO Y BOTON DE CERRAR SESIÓN

function mostrarCatalogo() {
    let usuario = document.getElementById("usuario");
    usuario.innerHTML = `<p>Bienvenido, ${logeado.nombre} | <button id="logout">Cerrar Sesión</button></p>`;
    let cerrar = document.getElementById("logout");
    cerrar.addEventListener("click", function () {
        localStorage.removeItem("logeado");
        location.reload();
    });
    
    // LISTA DE PRODUCTOS
    
    let lista = document.getElementById("productos");
    productos.forEach((producto) => {
        productoDiv = document.createElement("div");
        productoDiv.innerHTML = `
        <h2>Producto: ${producto.nombre}</h2>
        <p>ID del producto: ${producto.id}</p>
        <b>Precio: $${producto.precio}</b>
        <button id="comprar" value="${producto.precio}">Comprar</button>
        <hr>
        `;
        lista.appendChild(productoDiv);
    });
}

// CORRECCION DE QUE SI EL USUARIO ESTA LOGEADO, APAREZCA EL DIV DE LA COMPRA FINAL

logeado ? carritoDiv.style.display = "block" : carritoDiv.style.display = "none"
