// Botón de alerta
document.getElementById("alertButton").addEventListener("click", () => {
  alert("¡Gracias por visitar nuestra página!");
});

// Validación del formulario
document.getElementById("contactForm").addEventListener("submit", function (e) {
  e.preventDefault();

  let valid = true;

  const name = document.getElementById("name").value.trim();
  const email = document.getElementById("email").value.trim();
  const message = document.getElementById("message").value.trim();

  document.getElementById("nameError").textContent = "";
  document.getElementById("emailError").textContent = "";
  document.getElementById("messageError").textContent = "";

  if (name === "") {
    document.getElementById("nameError").textContent = "El nombre es obligatorio";
    valid = false;
  }

  if (email === "") {
    document.getElementById("emailError").textContent = "El correo es obligatorio";
    valid = false;
  }

  if (message === "") {
    document.getElementById("messageError").textContent = "El mensaje es obligatorio";
    valid = false;
  }

  if (valid) {
    alert("Formulario enviado correctamente");
    this.reset();
  }
});
