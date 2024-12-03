//Codigo JavaScript para manejo de la ventana modal
// Obtener elementos del DOM
const modal = document.getElementById("modal");
const cerrarModal = document.getElementById("cerrarModal");
const aceptarModal = document.getElementById("aceptarModal");

// Mostrar la modal al cargar la página
window.onload = function() {
    modal.style.display = "block";
};

// Cerrar la modal al hacer clic en el botón de cerrar
cerrarModal.onclick = function() {
    modal.style.display = "none";
};

// Cerrar la modal al hacer clic en el botón "Aceptar"
aceptarModal.onclick = function() {
    modal.style.display = "none";
};

// Cerrar la modal si se hace clic fuera del contenido
window.onclick = function(event) {
    if (event.target === modal) {
        modal.style.display = "none";
    }
};