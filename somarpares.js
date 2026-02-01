const numeros = [10, 17, 67, 44, 55];

function somarPares() {
  return numeros
    .filter((numero) => numero % 2 === 0)
    .reduce((total, numero) => total + numero, 0);
}
// reduce faz o papel de somar as informações, o total é a variável que "carrega" a informação da função reduce.
// Total começa com valor 0, depois ele soma seu numero (0) com o primeiro par filtrado (no caso 10), depois total vira o valor 10 e vai somando os pròximos pares até o fim da função.(resultado final = 54)