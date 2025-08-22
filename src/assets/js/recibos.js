document.addEventListener("DOMContentLoaded", async () => {
  const tableBody = document.querySelector("#recibosTable tbody");

  try {
    const res = await fetch("/api/recibos");
    const recibos = await res.json();

    tableBody.innerHTML = recibos.map((r, index) => `
      <tr>
        <td>${index + 1}</td>
        <td>${r.alumno}</td>
        <td>${new Date(r.fecha_subida).toLocaleDateString()}</td>
        <td><a href="${r.url_archivo}" target="_blank" class="btn btn-sm btn-primary">Ver PDF</a></td>
        <td>${r.estado}</td>
        <td>
          <button class="btn btn-success btn-sm" onclick="aprobarRecibo(${r.id})">Aprobar</button>
          <button class="btn btn-danger btn-sm" onclick="rechazarRecibo(${r.id})">Rechazar</button>
        </td>
      </tr>
    `).join("");

  } catch (error) {
    console.error("Error al cargar recibos:", error);
  }

  // Exportar a Excel
  document.getElementById("exportExcel").addEventListener("click", () => {
    const wb = XLSX.utils.table_to_book(document.getElementById("recibosTable"), { sheet: "Recibos" });
    XLSX.writeFile(wb, "RecibosPagos.xlsx");
  });
});

async function aprobarRecibo(id) {
  await fetch(`/api/recibos/${id}/aprobar`, { method: "POST" });
  location.reload();
}

async function rechazarRecibo(id) {
  await fetch(`/api/recibos/${id}/rechazar`, { method: "POST" });
  location.reload();
}