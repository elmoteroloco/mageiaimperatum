let productos = [];
let total = 0;

function agregarProducto(producto, precio) {
    alert("agregaste " + producto + " por " + precio + " a tu compra en 'Tienda virtual'.");
    let carrito = document.getElementById("carrito");
    let productoItem = document.createElement("p");
    productoItem.textContent = producto;
    carrito.appendChild(productoItem);

    // Agrega producto al array
    productos.push({ nombre: producto, precio: precio });

    // Actualizar el total
    total += precio;
    document.getElementById("btnPagar").textContent = `Pagar: $${total}`;
}

function pagar() {
    // Guardar datos en localStorage
    localStorage.setItem('productos', JSON.stringify(productos));
    localStorage.setItem('total', total);

    alert("Total a pagar: $ " + total);
    window.location.href = "ventasmageia.html"; // Redirige a la página de compra.html
}

function limpiarCarrito() {
    if (confirm("Vaciar carrito?")) {
        productos = [];
        total = 0;
        document.getElementById("carrito").innerHTML = ""; // Elimina todos los productos del carrito
        document.getElementById("btnPagar").textContent = "Comprar";

        // Limpia los datos del localStorage
        localStorage.removeItem('productos');
        localStorage.removeItem('total');
    }
}
