document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-eliminar");
  const mensaje = document.getElementById("mensaje-eliminacion");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = document.getElementById("id-delete").value.trim();

    if (!id) {
      alert("Debes ingresar un ID para eliminar.");
      return;
    }

    if (!confirm(`¿Estás seguro de eliminar al usuario con ID ${id}?`)) {
      return;
    }

    try {
      const respuesta = await fetch(`http://localhost:3000/api/borrar/${id}`, {
        method: "DELETE",
      });

      if (respuesta.ok) {
        mensaje.innerHTML = `<p style="color: green;">Usuario eliminado correctamente.</p>`;
        form.reset();
      } else if (respuesta.status === 404) {
        mensaje.innerHTML = `<p style="color: red;">Usuario no encontrado.</p>`;
      } else {
        const data = await respuesta.json();
        mensaje.innerHTML = `<p style="color: red;">Error al eliminar: ${data.mensaje || respuesta.status}</p>`;
      }
    } catch (error) {
      mensaje.innerHTML = `<p style="color: red;">Error de conexión: ${error.message}</p>`;
    }
  });
});