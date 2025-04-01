// Seleccionar los botones y el cronómetro.
const botonInicioPausa = document.querySelector('#boton-inicio-pausa');
const botonReiniciar = document.querySelector('#boton-reiniciar');
const cronometro = document.getElementById('cronometro');

// Variables de tiempo y estado.
let [segundos, minutos, horas] = [0, 0, 0];
let intervaloDeTiempo;
let cronometroActivo = false;

// Formatear tiempo con ceros a la izquierda.
const formatoTiempo = (unidad) => unidad.toString().padStart(2, '0');

// Actualizar la pantalla del cronómetro.
const actualizarCronometro = () => {
  if (++segundos === 60) (segundos = 0, ++minutos);
  if (minutos === 60) (minutos = 0, ++horas);

  cronometro.textContent = `${formatoTiempo(horas)}:${formatoTiempo(minutos)}:${formatoTiempo(segundos)}`;
};

// Iniciar o pausar cronómetro.
botonInicioPausa.addEventListener('click', () => {
  if (cronometroActivo) {
    clearInterval(intervaloDeTiempo);
    botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
  } else {
    intervaloDeTiempo = setInterval(actualizarCronometro, 1000);
    botonInicioPausa.innerHTML = `<i class="bi bi-pause"></i>`;
  }
  botonInicioPausa.classList.toggle('iniciar');
  botonInicioPausa.classList.toggle('pausar');
  cronometroActivo = !cronometroActivo;
});

// Reiniciar cronómetro.
botonReiniciar.addEventListener('click', () => {
  clearInterval(intervaloDeTiempo);
  [segundos, minutos, horas] = [0, 0, 0];
  cronometro.textContent = '00:00:00';
  botonInicioPausa.innerHTML = `<i class="bi bi-play-fill"></i>`;
  botonInicioPausa.classList.add('iniciar');
  botonInicioPausa.classList.remove('pausar');
  cronometroActivo = false;
});
