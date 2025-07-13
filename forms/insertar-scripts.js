document.addEventListener("DOMContentLoaded", function () {
  const form = document.getElementById("form-crear");

  form.addEventListener("submit", async function (e) {
    e.preventDefault();

    const id = document.getElementById("id").value.trim();
    const nombre = document.getElementById("nombre").value.trim();
    const email = document.getElementById("email").value.trim();

    if (!id || !nombre || !email) {
      alert("Por favor, completa todos los campos.");
      return;
    }

    try {
      const respuesta = await fetch("http://localhost:3000/api/insertar", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ id, nombre, email }),
      });

      if (respuesta.ok) {
        alert("Usuario creado exitosamente.");
        form.reset();
      } else {
        const data = await respuesta.json();
        alert("Error al crear el usuario: " + (data.mensaje || respuesta.status));
      }
    } catch (error) {
      alert("Error al conectar con el servidor: " + error.message);
    }
  });
});