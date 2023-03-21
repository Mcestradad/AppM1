let contador;
// Obtener el formulario y el botón de envío
let form;
let form2;
let btnEnviar;
var datos_;

window.onload = function () {
    //localStorage.clear();
    contador = localStorage.getItem('contador');
    if (contador == null) {
        contador = 0;
    }
    form2 = document.getElementById("form_contact_eliminar");
    document.getElementById("div_lista").classList.toggle("ocultar");
    form = document.getElementById('form_contact');
    btnEnviar = document.getElementById('guardar_contact_btn"');
    let temp = localStorage.getItem('contacto_1');
    if (temp !== undefined) {
        console.log(temp);

        if (temp) {
            datos_ = JSON.parse(temp);
            console.log(datos_);
            pintarContactos();
        }
    }
    agregar();
    eliminar();
}

function abrirRepaso() {
    document.getElementById("form_contact_div_eliminar").classList.toggle("ocultar");
    document.getElementById("div_lista").classList.toggle("ocultar");
    document.getElementById("repaso").classList.toggle("ocultar");
}

function cerrarRepaso() {
    document.getElementById("form_contact_div_eliminar").classList.toggle("ocultar");
    document.getElementById("div_lista").classList.toggle("ocultar");
    document.getElementById("repaso").classList.toggle("ocultar");
}

function abrirForm() {
    document.getElementById("form_contact_div").classList.toggle("ocultar");
    document.getElementById("div_lista").classList.toggle("ocultar");
}

function cerrarForm() {
    document.getElementById("form_contact_div").classList.toggle("ocultar");
    document.getElementById("div_lista").classList.toggle("ocultar");
}

function crearContacto(contacto) {
    var nodo = '<h4 id="id_' + contacto.nombre + '" class="ContactoData perfil"><strong>';
    nodo += '<a href="FramServPrec.html">'+contacto.nombre+'</a><br></strong>';
    nodo += contacto.direccion + '<br>';
    nodo += contacto.celular + '</h4><hr>';
    contenedor_contactos.innerHTML += nodo;
}

function pintarContactos() {

    contenedor_contactos.innerHTML = "";
    num = JSON.parse(localStorage.getItem('contador'));
    console.log(num);
    for (let i = 1; i <= num; i++) {
        console.log("aquí entró #" + i);
        let patron = "contacto_" + i;
        console.log(patron);


        let temp = JSON.parse(localStorage.getItem(patron));
        console.log(temp);
        if (temp.nombre != "vacio") {
            console.log(temp.nombre);
            crearContacto(temp);
        } else {
            console.log("ups")
        };


    }
}

function agregar() {
    form.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        // Agregar un controlador de eventos al botón de envío
        // Obtener los datos del formulario
        console.log("avr");
        let nombre = document.getElementById("nombre_contact").value;
        let correo = document.getElementById("email_contact").value;
        let celular = document.getElementById("telefono").value;
        let direccion = document.getElementById("direccion_contact").value;
        let contacto = {
            nombre: nombre,
            celular: celular,
            direccion: direccion,
            correo: correo
        };
        crearContacto(contacto);
        contador++;
        localStorage.setItem('contador', JSON.stringify(contador));
        // Guardar los datos en el Local Storage
        localStorage.setItem(("contacto_" + contador), JSON.stringify(contacto));
        // Mostrar un mensaje de confirmación
        alert('Los datos se han guardado en el Local Storage');
    }, false);
}


function eliminar() {
    form2.addEventListener('submit', event => {
        event.preventDefault();
        event.stopPropagation();
        // Agregar un controlador de eventos al botón de envío
        // Obtener los datos del formulario

        let num2 = JSON.parse(localStorage.getItem('contador'));
        let nombre = document.getElementById("nombre_contact2").value;
        let tmp = 0;

        for (let i = 1; i <= num2; i++) {
            let patron = "contacto_" + i;
            let contacto = JSON.parse(localStorage.getItem(patron));
            console.log("esto es lo que se lee");
            console.log(contacto);
            console.log(contacto.nombre == nombre);



            if (contacto.nombre == nombre && contacto != undefined) {
                var userDataStr = localStorage.getItem(patron);

                // Convertir la cadena JSON en un objeto JavaScript
                var userData = JSON.parse(userDataStr);

                // Mostrar el valor actual en la consola
                console.log("Valor actual de 'userData': ", userData);

                // Modificar el objeto userData
                userData.nombre = "vacio";

                // Convertir el objeto JavaScript modificado en una cadena JSON
                var nuevoUserDataStr = JSON.stringify(userData);

                // Almacenar el objeto como una cadena JSON en LocalStorage
                localStorage.setItem(patron, nuevoUserDataStr);
                tmp = 1;
                break;
            }
        }
        if (tmp == 0) {
            alert("No hubo coincidencias.");
        }

        cerrarRepaso();
        pintarContactos();

    }, false);


}

