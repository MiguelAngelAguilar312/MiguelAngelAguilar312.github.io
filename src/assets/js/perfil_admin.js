// --- FOTO ---
const inputFoto = document.getElementById("inputFoto");
const previewFoto = document.getElementById("previewFoto");
const vistaPublicaFoto = document.getElementById("vistaPublicaFoto");

document.getElementById("btnCambiarFoto").addEventListener("click", () => {
  if (inputFoto.files.length > 0) {
    alert("Foto cambiada correctamente.");
  } else {
    alert("Seleccione una foto primero.");
  }
});

document.getElementById("btnEliminarFoto").addEventListener("click", () => {
  previewFoto.src = "src/img/foto_perfil.jpg";
  vistaPublicaFoto.src = "src/img/foto_perfil.jpg";
  inputFoto.value = "";
  alert("Foto eliminada.");
});

inputFoto.addEventListener("change", () => {
  const file = inputFoto.files[0];
  if (file) {
    const url = URL.createObjectURL(file);
    previewFoto.src = url;
    vistaPublicaFoto.src = url;
  }
});

// --- FORMULARIO PERFIL ---
const formPerfil = document.getElementById("formPerfil");
const vistaPublicaNombre = document.getElementById("vistaPublicaNombre");
const vistaPublicaCorreo = document.getElementById("vistaPublicaCorreo");
const vistaPublicaTelefono = document.getElementById("vistaPublicaTelefono");

formPerfil.addEventListener("submit", (e) => {
  e.preventDefault();

  const nombre = document.getElementById("nombre").value;
  const correo = document.getElementById("correo").value;
  const telefono = document.getElementById("telefono").value;

  // Actualizar vista previa pública
  vistaPublicaNombre.textContent = nombre || "Juan Pérez";
  vistaPublicaCorreo.textContent = correo || "ejemplo@correo.com";
  vistaPublicaTelefono.textContent = telefono || "+52 55 1234 5678";

  alert("Información del perfil guardada.");
});

// --- FORMULARIO CONTRASEÑA ---
const formPassword = document.getElementById("formPassword");

formPassword.addEventListener("submit", (e) => {
  e.preventDefault();

  const actual = document.getElementById("passwordActual").value;
  const nueva = document.getElementById("passwordNueva").value;
  const confirmar = document.getElementById("passwordConfirmar").value;

  if (!actual || !nueva || !confirmar) {
    alert("Por favor complete todos los campos.");
    return;
  }

  if (nueva !== confirmar) {
    alert("Las contraseñas no coinciden.");
    return;
  }

  alert("Contraseña cambiada correctamente.");
});
