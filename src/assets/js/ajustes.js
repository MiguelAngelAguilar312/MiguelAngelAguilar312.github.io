document.addEventListener("DOMContentLoaded", () => {
  const ajustesForm = document.getElementById("ajustesForm");

  // Cargar valores guardados en localStorage
  if (localStorage.getItem("ajustes")) {
    const ajustes = JSON.parse(localStorage.getItem("ajustes"));

    document.getElementById("zonaHoraria").value = ajustes.zonaHoraria;
    document.getElementById("tema").value = ajustes.tema;

    document.getElementById("notificacionCorreo").checked = ajustes.notificacionCorreo;
    document.getElementById("notificacionChat").checked = ajustes.notificacionChat;

    document.getElementById("alertaMensajes").checked = ajustes.alertaMensajes;
    document.getElementById("alertaComentarios").checked = ajustes.alertaComentarios;
    document.getElementById("alertaPromociones").checked = ajustes.alertaPromociones;

    document.getElementById("privacidadPerfil").value = ajustes.privacidadPerfil;
    document.getElementById("compartirDatos").checked = ajustes.compartirDatos;
  }

  // Guardar cambios
  ajustesForm.addEventListener("submit", (e) => {
    e.preventDefault();

    const ajustes = {
      zonaHoraria: document.getElementById("zonaHoraria").value,
      tema: document.getElementById("tema").value,
      notificacionCorreo: document.getElementById("notificacionCorreo").checked,
      notificacionChat: document.getElementById("notificacionChat").checked,
      alertaMensajes: document.getElementById("alertaMensajes").checked,
      alertaComentarios: document.getElementById("alertaComentarios").checked,
      alertaPromociones: document.getElementById("alertaPromociones").checked,
      privacidadPerfil: document.getElementById("privacidadPerfil").value,
      compartirDatos: document.getElementById("compartirDatos").checked,
    };

    // Guardar en localStorage
    localStorage.setItem("ajustes", JSON.stringify(ajustes));

    alert("✅ Ajustes guardados correctamente.");
  });
});
