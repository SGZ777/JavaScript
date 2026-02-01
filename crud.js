const produtos = [
  { id: 1, nome: "Teclado", preco: 100 },
  { id: 2, nome: "Mouse", preco: 50 },
  { id: 3, nome: "Monitor", preco: 900 },
  { id: 4, nome: "Headset", preco: 200 },
];

let carrinho = [];

function adicionarAoCarrinho(id) {
  const produto = produtos.find((p) => p.id === id);
  if (produto) {
    carrinho.push(produto);
    console.log("Produto adicionado ao carrinho:", produto.nome);
  } else {
    console.log("Produto não encontrado");
  }
}

function removerDoCarrinho(id) {
  carrinho = carrinho.filter((p) => p.id !== id);
  console.log("Produto removido do carrinho");
}

function listarCarrinho() {
  console.log("Carrinho:");
  carrinho.forEach((p) => {
    console.log(p.nome + " - R$" + p.preco);
  });
}

function calcularTotal() {
  let total = 0;

  carrinho.forEach((p) => {
    total += p.preco;
  });

  return total;
}
