const colores = ['rojo', 'verde', 'azul'];

const valores = {};

colores.forEach((color) => {
  const input = document.getElementById(color);
  const texto = document.getElementById(`texto-${color}`);

  valores[color] = input.value;
  texto.textContent = input.value;

  input.addEventListener('change', (e) => {
    valores[color] = e.target.value;
    texto.textContent = valores[color];
    actualizarColor();
  });
});

function actualizarColor() {
  const colorRGB = `rgb(${valores.rojo}, ${valores.verde}, ${valores.azul})`;
  document.body.style.backgroundColor = colorRGB;
}
