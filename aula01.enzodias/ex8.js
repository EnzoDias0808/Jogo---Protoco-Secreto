const emEstoque = produtos
  .filter(produto => produto.estoque > 0)
  .map(produto => produto.nome);
