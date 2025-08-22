// Preguntas simuladas (puedes reemplazarlas con tu backend)
const preguntas = [
  {id:1, pregunta:"¿Cuál es la dosis correcta de anestesia pediátrica?", opciones:["10 mg","20 mg","30 mg"], correcta:1},
  {id:2, pregunta:"¿Qué agente inhalatorio se utiliza con más frecuencia?", opciones:["Sevoflurano","Isoflurano","Halotano"], correcta:0},
  {id:3, pregunta:"¿Cuál es el objetivo de la monitorización?", opciones:["Seguridad","Rapidez","Ahorro"], correcta:0}
];

const btnIniciar = document.getElementById("btnIniciar");
const modalEvaluacion = new bootstrap.Modal(document.getElementById("modalEvaluacion"));
const contenedorPreguntas = document.getElementById("contenedorPreguntas");
const formEvaluacion = document.getElementById("formEvaluacion");
const btnSalir = document.getElementById("btnSalir");

btnIniciar.addEventListener("click", () => {
  // Limpiar contenedor
  contenedorPreguntas.innerHTML = "";

  // Cargar preguntas
  preguntas.forEach((p, i) => {
    const div = document.createElement("div");
    div.classList.add("mb-3", "text-start");
    div.innerHTML = `
      <label class="form-label fw-bold">${i+1}. ${p.pregunta}</label>
      ${p.opciones.map((o,index) => `
        <div class="form-check">
          <input class="form-check-input" type="radio" name="pregunta${p.id}" id="pregunta${p.id}_${index}" value="${index}" required>
          <label class="form-check-label" for="pregunta${p.id}_${index}">${o}</label>
        </div>
      `).join("")}
    `;
    contenedorPreguntas.appendChild(div);
  });

  // Mostrar modal
  modalEvaluacion.show();
  btnSalir.disabled = false;
});

// Botón salir
btnSalir.addEventListener("click", () => {
  modalEvaluacion.hide();
});

// Enviar formulario
formEvaluacion.addEventListener("submit", (e) => {
  e.preventDefault();
  let aciertos = 0;

  preguntas.forEach(p => {
    const seleccion = formEvaluacion[`pregunta${p.id}`].value;
    if(parseInt(seleccion) === p.correcta) aciertos++;
  });

  alert(`Has respondido correctamente ${aciertos} de ${preguntas.length} preguntas`);
  modalEvaluacion.hide();
});