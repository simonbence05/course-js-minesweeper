const image = document.getElementById('hidden'); // a kép betöltése
const canvas = document.getElementById('myCanvas'); // a canvas betöltése
const c = canvas.getContext('2d'); // a canvas context betöltése

const size = 50; // a kép mérete

drawImage(0, 0); // a kép kirajzolása
drawImage(100, 100);
drawImage(123, 234);

function drawImage(x, y) {
  c.drawImage(image, x, y, size, size);
}