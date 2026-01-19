const nombre = document.getElementById("nombre");
const email = document.getElementById("email");
const password = document.getElementById("password");
const confirmPassword = document.getElementById("confirmPassword");
const edad = document.getElementById("edad");
const btnEnviar = document.getElementById("btnEnviar");

function validarNombre() {
  if (nombre.value.length >= 3) {
    nombre.className = "valido";
    errorNombre.textContent = "";
    return true;
  } else {
    nombre.className = "invalido";
    errorNombre.textContent = "Mínimo 3 caracteres";
    return false;
  }
}

function validarEmail() {
  const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (regex.test(email.value)) {
    email.className = "valido";
    errorEmail.textContent = "";
    return true;
  } else {
    email.className = "invalido";
    errorEmail.textContent = "Correo no válido";
    return false;
  }
}

function validarPassword() {
  const regex = /^(?=.*\d)(?=.*[@$!%*?&]).{8,}$/;
  if (regex.test(password.value)) {
    password.className = "valido";
    errorPassword.textContent = "";
    return true;
  } else {
    password.className = "invalido";
    errorPassword.textContent = "Mínimo 8 caracteres, número y símbolo";
    return false;
  }
}

function validarConfirmPassword() {
  if (confirmPassword.value === password.value && password.value !== "") {
    confirmPassword.className = "valido";
    errorConfirmPassword.textContent = "";
    return true;
  } else {
    confirmPassword.className = "invalido";
    errorConfirmPassword.textContent = "Las contraseñas no coinciden";
    return false;
  }
}

function validarEdad() {
  if (edad.value >= 18) {
    edad.className = "valido";
    errorEdad.textContent = "";
    return true;
  } else {
    edad.className = "invalido";
    errorEdad.textContent = "Debe ser mayor o igual a 18";
    return false;
  }
}

function validarFormulario() {
  if (
    validarNombre() &&
    validarEmail() &&
    validarPassword() &&
    validarConfirmPassword() &&
    validarEdad()
  ) {
    btnEnviar.disabled = false;
  } else {
    btnEnviar.disabled = true;
  }
}

nombre.addEventListener("input", validarFormulario);
email.addEventListener("input", validarFormulario);
password.addEventListener("input", validarFormulario);
confirmPassword.addEventListener("input", validarFormulario);
edad.addEventListener("input", validarFormulario);

document.getElementById("formulario").addEventListener("submit", function (e) {
  e.preventDefault();
  alert("Formulario validado correctamente");
});
