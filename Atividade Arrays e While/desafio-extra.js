let fila = ["João", "Maria", "Carlos", "Ana"];
let contador = 0;

while (contador < fila.length) {
  console.log(`${fila[contador]} saiu da fila`);
  fila.shift;
  contador++;
}
