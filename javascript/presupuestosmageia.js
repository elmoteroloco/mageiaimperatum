// Función envío del Formulario
function enviarFormulario(event) {
    event.preventDefault(); // Prevenir el comportamiento predeterminado del formulario

    // Obtiene datos de contacto
    const nombre = document.getElementById('nombre').value.trim();
    const apellido = document.getElementById('apellido').value.trim();
    const email = document.getElementById('contactoEmail').value.trim();
    const telefono = document.getElementById('telefono').value.trim();

    if (!nombre || !apellido || !email || !telefono) {
        alert("Por favor, completa todos los campos de contacto.");
        return; // detiene la ejecución de la función hasta que pase el if
    }

    // Envía el formulario a Formspree
    document.getElementById('formulmio').submit();
}

// Asociamos el evento al botón de enviar
document.getElementById('confirm').addEventListener('click', enviarFormulario);