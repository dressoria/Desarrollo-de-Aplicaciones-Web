// Arreglo inicial de productos
const productos = [
    {
        nombre: "Laptop",
        precio: 850,
        descripcion: "Laptop para estudio y trabajo"
    },
    {
        nombre: "Mouse",
        precio: 15,
        descripcion: "Mouse inalámbrico"
    },
    {
        nombre: "Teclado",
        precio: 25,
        descripcion: "Teclado mecánico básico"
    }
];

// Referencia al elemento UL
const lista = document.getElementById("lista-productos");

// Función para renderizar productos
function renderizarProductos() {
    lista.innerHTML = ""; // Limpia la lista antes de renderizar

    productos.forEach(producto => {
        const li = document.createElement("li");
        li.innerHTML = `
            <strong>${producto.nombre}</strong><br>
            Precio: $${producto.precio}<br>
            ${producto.descripcion}
        `;
        lista.appendChild(li);
    });
}

// Renderizar productos al cargar la página
renderizarProductos();

// Botón agregar producto
const btnAgregar = document.getElementById("btnAgregar");

btnAgregar.addEventListener("click", () => {
    const nuevoProducto = {
        nombre: "Producto Nuevo",
        precio: 10,
        descripcion: "Producto agregado dinámicamente"
    };

    productos.push(nuevoProducto);
    renderizarProductos();
});
