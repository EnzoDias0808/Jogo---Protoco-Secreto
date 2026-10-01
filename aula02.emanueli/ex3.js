try {
  const produto = await buscarProduto(3);
  console.log(produto);
} catch (erro) {
  console.log(erro);
}