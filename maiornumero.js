const numbers = [3, 6, 1, 9, 4, 7]
let maior = numbers[0]

for (let i = 0; i < numbers.length; i++){
     if (numbers[i] > maior){
       maior = numbers[i]
  }
}
console.log(maior)
// encontrar o maior numero do array só usando for e if