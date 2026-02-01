const numbers = [4, 7, 2, 9, 2, 4, 10];
let contador = 0;
for (let i = 0; i < numbers.length; i++) {
  if (numbers[i] % 2 == 0) {
    contador++;
  }
}
// encontrar os pares do array só com for e if