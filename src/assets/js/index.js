// LOGIN
document.getElementById("loginForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const email = document.getElementById("email").value.trim();
  const password = document.getElementById("password").value.trim();

  const users = [
    { email: "alumno@correo.com", password: "1234", role: "alumno" },
    { email: "profesor@correo.com", password: "abcd", role: "admin" },
    { email: "developer@correo.com", password: "devpass", role: "admin" }
  ];

  const user = users.find(u => u.email === email && u.password === password);

  if (user) {
    alert(`✅ Bienvenido ${user.role === "alumno" ? "Alumno" : "Administrador"}`);

    if (user.role === "alumno") {
      window.location.href = "dashboard-alumno.html";
    } else if (user.role === "admin") {
      window.location.href = "dashboard-admin.html";
    }
  } else {
    alert("❌ Usuario o contraseña incorrectos");
  }
});

// RECUPERAR CONTRASEÑA
document.getElementById("resetPasswordForm").addEventListener("submit", function (e) {
  e.preventDefault();

  const resetEmail = document.getElementById("resetEmail").value.trim();

  if (resetEmail) {
    alert(`📩 Se ha enviado un enlace de recuperación al correo: ${resetEmail}`);
    document.getElementById("resetPasswordForm").reset();

    // Cerrar modal después de enviar
    const modal = bootstrap.Modal.getInstance(document.getElementById("forgotPasswordModal"));
    modal.hide();
  }
});

// Generar que el cirrer de secion no se regres con el clic de retroceso
if (user) {
  sessionStorage.setItem("isLoggedIn", true); // Guardar sesión
  if (user.role === "alumno") {
    window.location.href = "dashboard-alumno.html";
  } else {
    window.location.href = "dashboard-admin.html";
  }
}