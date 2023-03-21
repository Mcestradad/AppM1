// Obtener los datos del localStorage
let datos;
let contenedor_perfil; 
let boton;
window.onload = function () {
    boton=document.getElementById('btn_cerrar_sesion');
    contenedor_perfil= document.getElementById('contenedor_perfil');
    // Leer los datos del localStorage
    let temp = localStorage.getItem("usuario");
    if (temp) {
        datos = JSON.parse(temp);
        console.log(datos.nombre);
        crearNodo(datos.nombre, datos.correo);
    }else{
        console.log("no fueron leídos.");
    }
    return datos;

}
// Actualizar el contenido del párrafo con los datos del localStorage
function crearNodo(nombre, correo) {
    var nodo = '<div class="perfil">';
    nodo += '<label>Hola ';
    nodo += '<span>' + nombre + '</span></label><br>';
    nodo += '<label>Iniciaste sesión con el correo electrónico <br>';
    nodo += '<span>' + correo + '</span></label></div>';
    contenedor_perfil.innerHTML += nodo;
}
function cerrarSesion(){
    console.log("cerró sesión");
    conectado={valor:'true'}
    localStorage.setItem('conexion', JSON.stringify(conectado));
    window.location.href="index.html";
        
  }




