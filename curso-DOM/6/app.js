// Seleccionar los elementos HMTL.
const input = document.getElementById('ingresar-tarea');
const boton = document.querySelector('button');
const listaDeTareas = document.getElementById('lista-de-tareas');

boton.addEventListener('click', agregarTarea);
input.addEventListener('keydown', (e) => {
  if (e.key === 'Enter') agregarTarea();
});

// Crear y agregar una tarea a la lista de tareas en el DOM.
function agregarTarea() {
  if (input.value.trim()) {
    // Crear tarea.
    let tareaNueva = document.createElement('div');
    tareaNueva.classList.add('tarea');

    // Texto ingresado por el usuario.
    let texto = document.createElement('p');
    texto.innerText = input.value;
    tareaNueva.appendChild(texto);

    // Crear y agregar contenedor de iconos.
    let iconos = document.createElement('div');
    iconos.classList.add('iconos');
    tareaNueva.appendChild(iconos);

    // Crear y agregar iconos.
    let completar = document.createElement('i');
    completar.classList.add('bi', 'bi-check-circle-fill', 'icono-completar');
    completar.addEventListener('click', completarTarea);

    let editar = document.createElement('i');
    editar.classList.add('bi', 'bi-pencil-fill', 'icono-editar');
    editar.addEventListener('click', editarTarea);

    let eliminar = document.createElement('i');
    eliminar.classList.add('bi', 'bi-trash3-fill', 'icono-eliminar');
    eliminar.addEventListener('click', eliminarTarea);

    iconos.append(completar, editar, eliminar);

    // Agregar la tarea a la lista.
    listaDeTareas.appendChild(tareaNueva);

    // Limpiar el input.
    input.value = '';
  } else {
    alert('Por favor ingresa una tarea.');
  }
}

// Marcar una tarea como completada.
function completarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  tarea.classList.toggle('completada');
}

// Editar una tarea existente.
function editarTarea(e) {
  let tarea = e.target.parentNode.parentNode;
  let texto = tarea.querySelector('p');

  // Crear un input de edición con el texto actual.
  let inputEdicion = document.createElement('input');
  inputEdicion.type = 'text';
  inputEdicion.value = texto.innerText;
  inputEdicion.classList.add('input-editar');

  // Reemplazar el texto por el input.
  tarea.replaceChild(inputEdicion, texto);
  inputEdicion.focus();

  // Guardar cambios cuando se presione "Enter" o pierda el foco.
  inputEdicion.addEventListener('keydown', (e) => {
    if (e.key === 'Enter') guardarEdicion();
  });
  inputEdicion.addEventListener('blur', guardarEdicion);

  function guardarEdicion() {
    if (inputEdicion.value.trim()) {
      texto.innerText = inputEdicion.value;
      tarea.replaceChild(texto, inputEdicion);
    } else {
      tarea.remove(); // Si queda vacío, se elimina la tarea.
    }
  }
}

// Eliminar una tarea del DOM.
function eliminarTarea(e) {
  e.target.parentNode.parentNode.remove();
}
