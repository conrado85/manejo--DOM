const boton = document.getElementById('boton-color');
const color = document.getElementById('color');

function generarColorHex() {
    return `#${Math.floor(Math.random() * 16777215).toString(16).padStart(6, '0')}`;
}

boton.addEventListener('click', () => {
    const nuevoColor = generarColorHex();
    // actualizar el texto y el fondo
    color.textContent = nuevoColor;
    // actualizar el fondo
    document.body.style.backgroundColor = nuevoColor;
});





