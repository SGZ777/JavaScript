const users = [
  { name: "Ana", isPremium: true },
  { name: "Bruno", isPremium: false },
  { name: "Carla", isPremium: true },
  { name: "Diego", isPremium: false },
  { name: "Eva", isPremium: true }
]
usersPremium = []

for (let i = 0; i < users.length; i++) {
  if (users[i].isPremium === true){
       usersPremium.push(users[i].name)
  }
}
console.log("Usuários Premium:", usersPremium)
// o código analisa o objeto users e devolve os nomes do users Premium