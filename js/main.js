let frm_login, frm_registro, home;
let btn_ir_a_registro, btn_enviar_registrar,btn_enviar;
let correo;
let conectado= true;

window.onload = function(){
  conectado = JSON.parse(localStorage.getItem('conexion'));

  

    logo_login.classList.toggle("ocultar");
    frm_login = document.getElementById("frm_login");
    btn_enviar = document.getElementById("btn_enviar");
    btn_enviar_registrar = document.getElementById("btn_enviar_registrar");
    frm_registro = document.getElementById("frm_registro");
    home = document.getElementById("home");
    btn_ir_a_registro = document.getElementById("btn_ir_a_registro");
    btn_ir_a_registro.addEventListener("click",irARegistro);
    //btn_enviar.addEventListener("click",validar);
    //btn_enviar_registrar.addEventListener("click",registrar);
    configurar_login();
    configurar_registro();

    
}

function configurar_login(){
    frm_login.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (frm_login.checkValidity()) {
       compararClave();
      }
      frm_login.classList.add('was-validated')
    }, false);
}

function configurar_registro(){
  frm_registro.addEventListener('submit', event => {
      event.preventDefault();
      event.stopPropagation();
      if (frm_registro.checkValidity()) 
      {
         registrar();
      }
      frm_registro.classList.add('was-validated');
    }, false);
}

function irARegistro(event){
  frm_login.reset();
  cambiarFormulario();
}

function cambiarFormulario()
{
  frm_login.classList.toggle("ocultar");
  frm_registro.classList.toggle("ocultar");
  logo_login.classList.toggle("ocultar");
}

function compararClave(){
  let correo = document.getElementById("correo");
  let clave = document.getElementById("clave");
  event.preventDefault();
  let usuario = JSON.parse(localStorage.getItem("usuario"));
  
  if(correo.value==usuario.correo && clave.value== usuario.clave)
  {
    frm_login.classList.remove('was-validated');
    frm_login.reset();
    frm_login.classList.add("ocultar");
    home.classList.remove("ocultar");
    logo_login.classList.toggle("ocultar");
    conectado={valor:'false'}
    localStorage.setItem('conexion', JSON.stringify(conectado));

  }
  else{
    alert("Datos incorrectos");
  }
}

function cerrarSesion(event){
  frm_login.classList.remove("ocultar");
  home.classList.add("ocultar");
}

function registrar(){
 
  let nombre = document.getElementById("nombre");
  let apellido = document.getElementById("apellido");
  let celular = document.getElementById("celular");
  let direccion = document.getElementById("direccion");
  let correo = document.getElementById("correo1");
  let clave = document.getElementById("clave1");
  let usuario = {
    nombre:nombre.value,
    apellido:apellido.value,
    celular:celular.value,
    direccion:direccion.value,
    correo:correo.value,
    clave:clave.value
  };
  
  localStorage.setItem("usuario",JSON.stringify(usuario));
  alert("¡Muy bien, registro exitoso!")
  cambiarFormulario();
}



