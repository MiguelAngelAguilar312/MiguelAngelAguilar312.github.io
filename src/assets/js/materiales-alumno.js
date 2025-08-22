// Ejemplo de materiales (simula la respuesta de tu backend)
const materiales = [
  {titulo: "Clase 1 - Introducción", descripcion: "Resumen de la primera clase", archivo: "clase1.pdf"},
  {titulo: "Clase 2 - Procedimientos", descripcion: "Procedimientos importantes", archivo: "clase2.pptx"},
  {titulo: "Clase 3 - Casos clínicos", descripcion: "Casos clínicos analizados", archivo: "clase3.docx"}
];

const tabla = document.getElementById("tablaMaterialesAlumno");

materiales.forEach(mat => {
  const tr = document.createElement("tr");

  tr.innerHTML = `
    <td>${mat.titulo}</td>
    <td>${mat.descripcion}</td>
    <td>${mat.archivo}</td>
    <td>
      <a href="uploads/${mat.archivo}" download class="btn btn-success btn-sm">
        <i class="bi bi-download"></i> Descargar
      </a>
    </td>
  `;

  tabla.appendChild(tr);
});
