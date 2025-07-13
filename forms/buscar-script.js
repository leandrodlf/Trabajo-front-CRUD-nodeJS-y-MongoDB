document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-buscar");
  const resultado = document.getElementById("resultado");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = document.getElementById("id-buscar").value.trim();

    if (!id) {
      alert("Ingresa un ID para buscar.");
      return;
    }

    try {
      const respuesta = await fetch(`http://localhost:3000/api/buscar/${id}`);

      if (respuesta.ok) {
        const usuario = await respuesta.json();
        resultado.innerHTML = `
          <h3>Usuario Encontrado</h3>
          <p><strong>ID:</strong> ${usuario.id}</p>
          <p><strong>Nombre:</strong> ${usuario.nombre}</p>
          <p><strong>Correo:</strong> ${usuario.email}</p>
        `;
      } else if (respuesta.status === 404) {
        resultado.innerHTML = "<p style='color:red;'>Usuario no encontrado.</p>";
      } else {
        resultado.innerHTML = "<p style='color:red;'>Error al buscar el usuario.</p>";
      }
    } catch (error) {
      resultado.innerHTML = "<p style='color:red;'>Error de conexión: " + error.message + "</p>";
    }
  });
});