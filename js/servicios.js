let servicios = [];
let array = [];

window.onload = function () {


    servicios[1] = document.querySelector('#caja_1');
    servicios[2] = document.querySelector('#caja_2');
    servicios[3] = document.querySelector('#caja_3');
    servicios[4] = document.querySelector('#caja_4');
    servicios[5] = document.querySelector('#caja_5');
    servicios[6] = document.querySelector('#caja_6');
    servicios[7] = document.querySelector('#caja_7');
    servicios[8] = document.querySelector('#caja_8');
    servicios[9] = document.querySelector('#caja_9');

    pintarServicios();
    servicios[1].addEventListener("click", cambiaEstado);
    servicios[2].addEventListener("click", cambiaEstado);
    servicios[3].addEventListener("click", cambiaEstado);
    servicios[4].addEventListener("click", cambiaEstado);
    servicios[5].addEventListener("click", cambiaEstado);
    servicios[6].addEventListener("click", cambiaEstado);
    servicios[7].addEventListener("click", cambiaEstado);
    servicios[8].addEventListener("click", cambiaEstado);
    servicios[9].addEventListener("click", cambiaEstado);

}

function cambiaEstado(event) {
    console.log(event.target.id);
    let ref = document.querySelector("#" + event.target.id + "img");
    ref.classList.toggle("ocultar");
    console.log(ref.classList.contains("ocultar") + " -- " + localStorage.getItem(event.target.id));
    if (Boolean(ref.classList.contains("ocultar")) == Boolean('true')) {
        window.localStorage.setItem(event.target.id, 'true');
        console.log(ref.classList.contains("ocultar") + " -false- " + localStorage.getItem(event.target.id));
    } else {
        window.localStorage.setItem(event.target.id, 'false');
        console.log(ref.classList.contains("ocultar") + " -verdadero- " + localStorage.getItem(event.target.id));
    }

}



function pintarServicios() {
    
  
    for (let i = 1; i <= 9; i++) {
        console.log("aquí entró #" + i);
        let patron = "caja_" + i;
        console.log(patron);
        let ref = document.querySelector("#" + patron + "img");
        console.log(ref);
        let estado = window.localStorage.getItem(patron);
        array.push(JSON.parse(estado));
        console.log("monstra estado del patron: " + patron + " el estado es: " + estado);
        if (JSON.parse(estado) == false) {
            ref.classList.toggle("ocultar");
            console.log("estado acorde:\n")
            console.log(ref);
        }
    } console.log(array);
}

function obtenerEstados(){
    array=[]
    for (let i=1;i<=9;i++){
        let patron ="caja_"+i;
        let estado= window.localStorage.getItem(patron);
        if (JSON.parse(estado)==null){
            estado= 'true'
        }
        array.push(JSON.parse(estado));
        window.localStorage.setItem('estados',JSON.stringify(array));
    }
}

