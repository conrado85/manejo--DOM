const colores = ['rojo', 'verde', 'azul'];

const valores = {};
// Recorrer los colores
colores.forEach((color) => {
  const input = document.getElementById(color);
  const texto = document.getElementById(`texto-${color}`);
// Guardar los valores
  valores[color] = input.value;
// Actualizar el texto  
  texto.textContent = input.value;
// Actualizar el color
  input.addEventListener('change', (e) => {
    valores[color] = e.target.value;
    texto.textContent = valores[color];
    actualizarColor();
  });
});
//cambiar el color
function actualizarColor() {
  const colorRGB = `rgb(${valores.rojo}, ${valores.verde}, ${valores.azul})`;
  // Actualizar el color de fondo
  document.body.style.backgroundColor = colorRGB;
}
