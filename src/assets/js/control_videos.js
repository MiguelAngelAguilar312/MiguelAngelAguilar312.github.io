let videoActual = 1; // ID del video actual

// Función para cargar un video diferente
function cargarVideo(nombreArchivo, idVideo) {
  const player = document.getElementById("videoPlayer");
  if (player) {
    player.src = "src/videos/" + nombreArchivo;
    player.load();
    videoActual = idVideo;
  }
}

// Evento que detecta cuando se termina el video
document.addEventListener("DOMContentLoaded", () => {
  const player = document.getElementById("videoPlayer");
  
  if (player) {
    player.addEventListener("ended", function() {
      // Enviar al backend que el video fue visto
      fetch("/api/videos/marcar-visto", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify({ videoId: videoActual, usuarioId: 123 }) // usuarioId se define por sesión
      })
      .then(res => res.json())
      .then(data => {
        console.log("Video marcado como visto:", data);
        alert("✅ El video se registró como visto en tu cuenta.");
      })
      .catch(err => console.error("Error al marcar video:", err));
    });
  }

  // Control de comentarios (simulado)
  const formComentario = document.getElementById("formComentario");
  const nuevoComentario = document.getElementById("nuevoComentario");
  const listaComentarios = document.getElementById("comentarios");

  if (formComentario) {
    formComentario.addEventListener("submit", e => {
      e.preventDefault();
      if (nuevoComentario.value.trim() !== "") {
        const comentario = document.createElement("p");
        comentario.innerHTML = `<strong>Tú:</strong> ${nuevoComentario.value}`;
        listaComentarios.appendChild(comentario);
        nuevoComentario.value = "";
        listaComentarios.scrollTop = listaComentarios.scrollHeight;
      }
    });
  }
});
