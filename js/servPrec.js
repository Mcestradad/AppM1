// Obtener los datos del localStorage
let datos;
let contenedor_perfil; 
let boton;
let contenedor_contacto_selec= document.getElementById('contenedor_contacto_selec');
let contenedor_servicios_select= document.getElementById('contenedor_servicios_select');
window.onload = function () {
    // Leer los datos del localStorage
    let temp = localStorage.getItem("id_seleccion");
    let contacto = localStorage.getItem(temp);
    if (contacto) {
        datos = JSON.parse(contacto);
        console.log(datos);
        crearNodo(datos);
    }else{
        console.log("no fueron leídos.");
    }
    pintarServicios();
    return datos;

}
// Actualizar el contenido del párrafo con los datos del localStorage
function crearNodo(datos) {
    var nodo = '<h4 class="ContactServ"> '+datos.nombre+' <br>';
    nodo += datos.direccion+' <br>';
    nodo += datos.celular+' <br>';
    contenedor_contacto_selec.innerHTML += nodo;
}


function crearServicio(servicio) {
    var nodo = '<h4 id="id_' + servicio+ '" class="servicioData perfil"><strong>';
    nodo += 'Cuesta COP$80.000,00<br>';
    nodo += '<button type="submit" id="servicio_seleccionado">' + servicio+ '</button></strong></h4><hr>';
    contenedor_servicios_select.innerHTML += nodo;
}


function obtenerEstados(){
    array=[]
    for (let i=1;i<=9;i++){
        let patron ="caja_"+i;
        let estado= window.localStorage.getItem(patron);
        if (JSON.parse(estado)==null){
            estado= 'true'
        }
        array.push(estado);
        window.localStorage.setItem('estados',JSON.stringify(array));
    }
}

function pintarServicios() {
    obtenerEstados();
    contenedor_servicios_select.innerHTML = "";
    //list_count=  localStorage.getItem('list_count');
    let servicios = window.localStorage.getItem('estados');
    servicios= JSON.parse(servicios);
    let nombre_servicio;
    for (let i = 0; i < 9; i++) {
        if(servicios[i]=="false"){
            if(i==0){
                nombre_servicio="Bachata";
            }else if(i==1){
                nombre_servicio="Urbano";
            }else if(i==2){
                nombre_servicio="Salsa";
            }else if(i==3){
                nombre_servicio="Merengue";
            }else if(i==4){
                nombre_servicio="Champeta";
            }else if(i==5){
                nombre_servicio="Samba";
            }else if(i==6){
                nombre_servicio="Rumba";
            }else if(i==7){
                nombre_servicio="Moderno";
            }else if(i==8){
                nombre_servicio="Dance Fit";
            }
            console.log(nombre_servicio);
            crearServicio(nombre_servicio);
        }



    }
}