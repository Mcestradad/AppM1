$(document).ready(function() {
    // obtener la lista de elementos del localstorage
    var elementos = JSON.parse(localStorage.getItem('elementos')) || [];
  
    // cargar los elementos en la lista en la página
    cargarElementos(elementos);
  
    // agregar un controlador de eventos para el envío del formulario
    $('#formulario').submit(function(event) {
      // detener la acción predeterminada del formulario
      event.preventDefault();
  
      // obtener los valores del formulario
      var nombre = $('#nombre').val();
      var edad = $('#edad').val();
  
      // crear un nuevo elemento con los valores del formulario
      var nuevoElemento = {
        nombre: nombre,
        edad: edad
      };
  
      // agregar el nuevo elemento a la lista de elementos
      elementos.push(nuevoElemento);
  
      // guardar la lista de elementos en el localstorage
      localStorage.setItem('elementos', JSON.stringify(elementos));
  
      // cargar los elementos en la lista en la página
      cargarElementos(elementos);
  
      // restablecer los valores del formulario
      $('#formulario')[0].reset();
    });
  });
  
  // función para cargar los elementos en la lista en la página
  function cargarElementos(elementos) {
    // obtener el elemento de la lista en la página
    var lista = $('#lista-elementos');
  
    // vaciar la lista actual
    lista.empty();
  
    // agregar cada elemento a la lista en la página
    elementos.forEach(function(elemento, index) {
      var li = $('<li></li>');
      li.text(elemento.nombre + ' (' + elemento.edad + ')');
  
      var botonEliminar = $('<button>Eliminar</button>');
      botonEliminar.click(function() {
        // eliminar el elemento de la lista de elementos
        elementos.splice(index, 1);
  
        // guardar la lista de elementos actualizada en el localstorage
        localStorage.setItem('elementos', JSON.stringify(elementos));
  
        // cargar los elementos en la lista en la página
        cargarElementos(elementos);
      });
  
      li.append(botonEliminar);
      lista.append(li);
    });
  }
  