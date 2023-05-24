let datos;
let servicio;
let lista_agendados= document.getElementById('contenedor_agendados');
let contenedor_servicios_select= document.getElementById('contenedor_servicios_select');

window.onload = function () {
    console.log("pintar agendados");
    //ontacto_escogido.addEventListener("click", escucharServicios);
    // Leer los datos del localStorage
    let temp = localStorage.getItem('agendado_select_1');
    if (temp !== undefined) {
        if (temp) {
            pintarAgendados();
        }
    }
}

function crearContacto(contacto) {
    var nodo = '<h4 id="agendado_' + contacto.nombre + '" class="ContactoData perfil"><strong>';
    nodo += contacto.nombre  + '</strong><br>';
    nodo += contacto.direccion + '<br>';
    nodo += contacto.celular + "&nbsp;|"+ contacto.fecha+ "&nbsp;|"+ contacto.hora+ '</h4><hr>';
    lista_agendados.innerHTML += nodo;


}

function pintarAgendados() {
    console.log("pintar agendados");
    lista_agendados.innerHTML = "";
    num = JSON.parse(localStorage.getItem('contador_agendado'));
    //list_count=  localStorage.getItem('list_count');
    console.log(num);
    for (let i = 1; i <= num; i++) {
        console.log("aquí entró #" + i);
        let patron = "agendado_select_" + i;
        console.log(patron);


        let temp = JSON.parse(localStorage.getItem(patron));

        console.log(temp);
        crearContacto(temp);



    }
}
