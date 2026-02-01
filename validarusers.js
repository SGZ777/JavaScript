const users = [
  { id: 1, nome: "João", idade: 17, ativo: true },
  { id: 2, nome: "Maria", idade: 22, ativo: true },
  { id: 3, nome: "Carlos", idade: 30, ativo: false },
  { id: 4, nome: "Ana", idade: 18, ativo: true },
];

return users
  .filter((user) => user.ativo == true)
  .filter((user) => user.idade >= 18)
  .map((user) => user.nome);
