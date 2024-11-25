import { usuarios } from "../models/ModelUsuario.js";
export function login() {
  let loginUsuario = document.getElementById("login-usuario").value;
  let loginContrasena = document.getElementById("login-contrasena").value;
  console.log(usuarios);
  usuarios.some(function (index) {
    if (loginUsuario == index.usuario && loginContrasena == index.contrasena) {
      let timerInterval;
      Swal.fire({
        title: "Bienvenido: " + index.nombre,
        html: "Sera redireccionado <b></b> milliseconds.",
        timer: 2000,
        timerProgressBar: true,
        icon:"success",
        didOpen: () => {
          Swal.showLoading();
          const timer = Swal.getPopup().querySelector("b");
          timerInterval = setInterval(() => {
            timer.textContent = `${Swal.getTimerLeft()}`;
          }, 100);
        },
        willClose: () => {
          clearInterval(timerInterval);
          window.location.href = "/views/pages/viewCredito.html";
        },
      }).then((result) => {
        /* Read more about handling dismissals below */
        if (result.dismiss === Swal.DismissReason.timer) {
          console.log("I was closed by the timer");
        }
      });
    } else{
        Swal.fire({
            title: "Error",
            text: "Quien so vo, indentificate",
            icon: "error",
          });
    }
  });
}

export function register() {
  let registroNombre = document.getElementById("register-nombre").value;
  let registroUsuario = document.getElementById("register-usuario").value;
  let registroCorreo = document.getElementById("register-correo").value;
  let registroContrasena = document.getElementById("register-contrasena").value;
  let registroVerifique = document.getElementById("register-verifique").value;
  let newRegistro = {
    nombre: registroNombre,
    usuario: registroUsuario,
    correo: registroCorreo,
    contrasena: registroContrasena,
    verifique: registroVerifique,
  };
  usuarios.unshift(newRegistro);
  document.getElementById("form-register").style.display = "none";
  document.getElementById("form-login").style.display = "flex";
  console.log(newRegistro);
}
