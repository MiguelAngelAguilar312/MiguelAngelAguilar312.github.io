// Simulación de datos, reemplazar con fetch() a backend
const datosAlumno = [
  { modulo: "Módulo 1", videosVistos: 5, totalVideos: 6, calificacionMax: 85 },
  { modulo: "Módulo 2", videosVistos: 6, totalVideos: 6, calificacionMax: 92 },
  { modulo: "Módulo 3", videosVistos: 4, totalVideos: 5, calificacionMax: 78 },
];

// Cargar tabla dinámicamente
const tbody = document.querySelector("#tablaAvance tbody");
datosAlumno.forEach(d => {
  const tr = document.createElement("tr");
  const avance = Math.round((d.videosVistos / d.totalVideos) * 100);
  tr.innerHTML = `
    <td>${d.modulo}</td>
    <td>${d.videosVistos}/${d.totalVideos}</td>
    <td>${avance}%</td>
    <td>${d.calificacionMax}</td>
  `;
  tbody.appendChild(tr);
});

// Exportar tabla a Excel
document.getElementById("exportExcel").addEventListener("click", () => {
  const wb = XLSX.utils.table_to_book(document.getElementById("tablaAvance"), {sheet: "Avance"});
  XLSX.writeFile(wb, "avance_alumno.xlsx");
});
