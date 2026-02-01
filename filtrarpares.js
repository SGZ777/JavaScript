const numeros = [1,2,3,4,5,6]

function dobrarPares(array) {
  const pares = array.filter(n => n % 2 === 0)
  const dobrados = pares.map(n => n * 2)
  return dobrados
}
// filter e map podem armazenar seus dados dentro de variáveis também, podendo utiliza-los no código posteriormente