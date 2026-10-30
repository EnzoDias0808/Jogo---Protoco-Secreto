//atv 1 
// Uma Promise é um objeto em JavaScript que representa o sucesso ou a falha eventual de uma operação assíncrona, funcionando como um intermediário para um resultado que ainda será extraído.

//atv 2
// Pendente, realizada e rejeitada

//atv 3
try {
  const produto = await buscarProduto(3);
  console.log(produto);
} catch (erro) {
  console.log(erro);
}

//atv4
//O operador await pausa apenas a execução da função assíncrona (async) onde ele está, e não o programa inteiro.

//atv 5
//porque o motor do JavaScript precisa saber com antecedência que aquela função será pausada e liberará o fluxo de execução para o restante do programa.

//atv 6
async function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "Produto " + id });
    }, 1000);
  });
}

//atv 7
//O erro é que a função carregarDados não foi declarada com a palavra-chave async, o que impede o uso do await dentro dela.

//atv 8
const dados = await resposta.json();

//atv 9
//A diferença central está em quem quebrou o fluxo da comunicação.

//atv 10
//porque ele é uma função síncrona que não foi projetada para lidar com assincronismo.