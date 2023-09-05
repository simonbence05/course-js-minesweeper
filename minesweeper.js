const canvas = document.getElementById('myCanvas'); // a canvas betöltése
const c = canvas.getContext('2d'); // a canvas context betöltése
const hiddenImg = document.getElementById('hidden'); // a kép betöltése
const mineImg = document.getElementById('mine'); // a kép betöltése

const size = 50; // a kép mérete
const columns = canvas.width / size; // oszlopok száma
const rows = canvas.height / size; // sorok száma
const mine = 'mine'; // akna
const mineCount =20; // aknák száma

const images = { // képek betöltése, ez egy objektum adattípus, több adatot tárolhatunk benne, jelölése kapcsos zárójelben
  'hidden': document.getElementById('hidden'),
  'mine': document.getElementById('mine'),
  '0': document.getElementById('field-0'),
  '1': document.getElementById('field-1'),
  '2': document.getElementById('field-2'),
  '3': document.getElementById('field-3'),
  '4': document.getElementById('field-4'),
  '5': document.getElementById('field-5'),
  '6': document.getElementById('field-6'),
  '7': document.getElementById('field-7'),
  '8': document.getElementById('field-8'),
};

let map = createMap();


//let isMine = false; // boolean adattípus, igaz vagy hamis
//let text = 'hello world'; // string azaz szöveg adattípus, idézőjelek között
//let valami = undefined; // undefined adattípus, ha nem adunk értéket egy változónak, akkor undefined lesz
//let valami2 = null; // null adattípus, ha null értéket adunk egy változónak, akkor null lesz
//let valami3 = 0; // number adattípus, számokat tárolunk benne
//let valami4 = []; // array adattípus, tömb, több adatot tárolhatunk benne
//let valami5 = {}; // object adattípus, objektum, több adatot tárolhatunk benne
//let valami6 = true; // boolean adattípus, igaz vagy hamis
//let valami7 = function() {}; // function adattípus, függvény


placeMines(map, mineCount);


drawMap();

function placeMines (map, mineCount) { // aknák elhelyezése
  let mines = 0; // aknák száma
  while (mines < mineCount) { // addig ismételje amíg a mines kisebb mint a mineCount
    let x = Math.floor(Math.random() * columns); // véletlen szám az x vízszintes tengelyen az oszlopok száma alapján
    let y = Math.floor(Math.random() * rows); // véletlen szám az y függőleges tengelyen a sorok száma alapján
    if (map[y][x] !== mine) { // ha a map y sor x oszlopán nem akna
      map[y][x] = mine; // akkor a map y sor x oszlopára helyezzünk el egy aknát
      mines++; // növeljük az aknák számát
    }
  }
}

function createMap () { 
  let map = []; 
  for (let j = 0; j < rows; j++) {  
    let row = []; 
    for (let i = 0; i < columns; i++) { 
      row[i] = 0; 
    }
    map[j] = row;
  }
  return map;
}

function drawMap () {
  for (let rowI = 0; rowI < rows; rowI++) { 
    for (let colI = 0; colI < columns; colI++) {
      let field = map[rowI][colI];
      let image = images[field];
      drawImage(image, colI * size, rowI * size);
    }
  }
}

function drawImage(image, x, y) {
  c.drawImage(image, x, y, size, size);
}