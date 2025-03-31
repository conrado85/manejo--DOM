const botonCitas = document.getElementById("boton-cambiar-cita");
const citaElemento = document.getElementById("cita");
const autorElemento = document.getElementById("autor");

//generar cita aleatoria.

const generarEnteroAleatorio = (min, max) => Math.floor(Math.random() * (max - min) + min);

// actualizar citas y autores.

const citasAleatorias = () => {
    const { texto , autor } = citas[generarEnteroAleatorio(0, citas.length)];
    citaElemento.textContent = `"${texto}"`;
    autorElemento.textContent = autor;
};

citasAleatorias();
// el boton cambiar cita
botonCitas.addEventListener("click", citasAleatorias);

