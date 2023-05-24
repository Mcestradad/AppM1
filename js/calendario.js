
//Tras cargarse la página ...
let datos;
let contador;
let contacto_escogido= document.getElementById('contacto_escogido');
let contenedor_servicios_select= document.getElementById('contenedor_servicios_select');
let guadar_en_agenda_bttn=document.getElementById('guadar_en_agenda_bttn');
let dateInput = document.getElementById('datepicker');
let timeInput = document.getElementById('timepicker');
let temp = localStorage.getItem("id_seleccion");
let servicio = localStorage.getItem("id__serv_seleccion");
let contacto = localStorage.getItem(temp);
window.onload = function () {
   // Leer los datos del localStorage
   contador = localStorage.getItem('contador_agendado');
    //num_elem = localStorage.getItem('list_count');
    if (contador == null) {
        contador = 0;
    }
   
   if (contacto) {
       datos = JSON.parse(contacto);
       console.log(datos);
       console.log(servicio);
       crearNodo(datos,servicio);
   }else{
       console.log("no fueron leídos.");
   }

}


// Actualizar el contenido del párrafo con los datos del localStorage
function crearNodo(datos,servicio) {
   var nodo = '<p style="color: #380047; font-size: 34px;">'+datos.nombre+'</p>';
   nodo += '<p style="color: #BA54C2;">'+servicio+'<br> 80.000</p>';
   contacto_escogido.innerHTML += nodo;
}

function obtenerFecha() {
   let fechaSeleccionada = dateInput.value;
   let horaSeleccionada = timeInput.value;
   
   datos = JSON.parse(contacto);

   let agendado = {
      id: datos.id,
      nombre: datos.nombre,
      celular: datos.celular,
      direccion: datos.direccion,
      correo: datos.correo,
      servicio: servicio,
      fecha: fechaSeleccionada,
      hora: horaSeleccionada
  };
  console.log(agendado);
  contador++;
  localStorage.setItem('contador_agendado', JSON.stringify(contador));
  localStorage.setItem('agendado_select_'+contador ,JSON.stringify(agendado));
  window.location.href = "FramReservas.html";
 }
