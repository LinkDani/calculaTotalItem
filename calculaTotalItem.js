const listaProdutos = [
     {id: 1, nome: 'Maçã da fruteira da avenida', valorUnitário: 10},
     {id: 2, nome: 'Banana verde do kiosque', valorUnitário: 4},
     {id: 3, nome: 'Açai artificial', valorUnitário: 6},
     {id: 4, nome: 'Café do mercado público', valorUnitário: 50}
];

const calculaTotalItem = function(codigo, quantidade, desconto) {
  let produtoEncontrado;

  for(var i = 0; i <= listaProdutos.length-1; i++){
    if (listaProdutos[i].id == codigo) {
      produtoEncontrado = listaProdutos[i];
    }
  }
  const nomeProduto = produtoEncontrado.nome;
  const total = produtoEncontrado.valorUnitário * quantidade;
  const totalComDesconto = total - (desconto||0);
  if(desconto > totalComDesconto){

      const totalComDesconto = 0;

    console.log({ produto: nomeProduto, valor: totalComDesconto });
    return { produto: nomeProduto, valor: totalComDesconto}
  }
  console.log({ produto: nomeProduto, valor: totalComDesconto });
  return { produto: nomeProduto, valor: totalComDesconto}
}

module.exports = { calculaTotalItem }
