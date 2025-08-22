let intentos = 0;
const maxIntentos = 3;
let usuarioId = 123; // ⚠️ este valor debe venir de la sesión real

// Preguntas ejemplo (en producción vendrán del backend sin respuestas correctas visibles)
async function cargarPreguntas() {
  const res = await fetch("/api/evaluaciones/obtener-preguntas");
  const preguntas = await res.json();

  const contenedor = document.getElementById("contenedorPreguntas");
  contenedor.innerHTML = "";

  preguntas.forEach((p, i) => {
    const opciones = p.opciones.map((op, j) => `
      <div class="form-check">
        <input class="form-check-input" type="radio" name="pregunta${i}" value="${op}" required>
        <label class="form-check-label">${op}</label>
      </div>
    `).join("");

    contenedor.innerHTML += `
      <div class="mb-3">
        <label class="form-label"><strong>${i+1}. ${p.texto}</strong></label>
        ${opciones}
      </div>
    `;
  });
}

// Iniciar evaluación
document.getElementById("btnIniciar").addEventListener("click", async () => {
  if (intentos >= maxIntentos) {
    alert("Ya has agotado tus intentos.");
    return;
  }

  await cargarPreguntas();
  const modal = new bootstrap.Modal(document.getElementById("modalEvaluacion"));
  modal.show();
});

// Enviar respuestas
document.getElementById("formEvaluacion").addEventListener("submit", async (e) => {
  e.preventDefault();

  intentos++;

  // Obtener respuestas
  const formData = new FormData(e.target);
  const respuestas = {};
  formData.forEach((val, key) => {
    respuestas[key] = val;
  });

  // Enviar al backend
  const res = await fetch("/api/evaluaciones/enviar", {
    method: "POST",
    headers: { "Content-Type": "application/json" },
    body: JSON.stringify({
      usuarioId,
      respuestas,
      intento: intentos
    })
  });

  const data = await res.json();

  alert(`Tu calificación es: ${data.calificacion}`);
  if (intentos >= maxIntentos) {
    alert("Has completado todos tus intentos. Se guardará la calificación más alta.");
  }

  document.getElementById("modalEvaluacion").querySelector(".btn-close").disabled = false;
  bootstrap.Modal.getInstance(document.getElementById("modalEvaluacion")).hide();
});
