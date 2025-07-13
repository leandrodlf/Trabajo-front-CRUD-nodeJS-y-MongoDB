document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-actualizar");
  const mensaje = document.getElementById("mensaje-actualizacion");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = document.getElementById("id-update").value.trim();
    const nombre = document.getElementById("nombre-update").value.trim();
    const email = document.getElementById("email-update").value.trim();

    if (!id || !nombre || !email) {
      alert("Completa todos los campos antes de actualizar.");
      return;
    }

    try {
      const respuesta = await fetch(`http://localhost:3000/api/actualizar/${id}`, {
        method: "PUT",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ nombre, email }),
      });

      if (respuesta.ok) {
        mensaje.innerHTML = "<p style='color:green;'>Usuario actualizado correctamente.</p>";
        form.reset();
      } else {
        const data = await respuesta.json();
        mensaje.innerHTML = `<p style='color:red;'>Error al actualizar: ${data.mensaje || respuesta.status}</p>`;
      }
    } catch (error) {
      mensaje.innerHTML = `<p style='color:red;'>Error de conexión: ${error.message}</p>`;
    }
  });
});