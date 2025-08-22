document.addEventListener("DOMContentLoaded", () => {
  const formRecibo = document.getElementById("formRecibo");
  const tableBody = document.querySelector("#misRecibosTable tbody");

  // Función para cargar los recibos del alumno
  async function cargarRecibos() {
    try {
      const res = await fetch("/api/mis-recibos");
      const recibos = await res.json();

      tableBody.innerHTML = recibos.map((r, i) => `
        <tr>
          <td>${i + 1}</td>
          <td>${new Date(r.fecha_pago).toLocaleDateString()}</td>
          <td>$${r.monto_pago}</td>
          <td><a href="${r.url_archivo}" target="_blank" class="btn btn-sm btn-primary">Ver PDF</a></td>
          <td>${r.estado}</td>
        </tr>
      `).join("");

    } catch (error) {
      console.error("Error al cargar recibos:", error);
    }
  }

  // Enviar formulario
  formRecibo.addEventListener("submit", async (e) => {
    e.preventDefault();
    const formData = new FormData(formRecibo);

    try {
      const res = await fetch("/api/mis-recibos", {
        method: "POST",
        body: formData
      });
      if (!res.ok) throw new Error("Error al subir el recibo");
      alert("Recibo subido correctamente");
      formRecibo.reset();
      cargarRecibos();
    } catch (error) {
      console.error(error);
      alert("No se pudo subir el recibo");
    }
  });

  // Carga inicial
  cargarRecibos();
});
