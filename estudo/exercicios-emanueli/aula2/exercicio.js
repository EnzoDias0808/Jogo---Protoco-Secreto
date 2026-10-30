// 1
// Uma Promise é um objeto que representa o sucesso ou a falha futura de uma operação assíncrona.

// 2
// Os três estados possíveis são Pending (pendente), Fulfilled (realizada/resolvida) e Rejected (rejeitada).

// 3
try {
  const produto = await buscarProduto(3);
  console.log(produto);
} catch (erro) {
  console.log(erro);
}

// 4
// O await pausa apenas a execução da função async onde ele está, liberando o resto do programa para continuar rodando.

// 5
// Porque o await precisa que a função seja marcada como async para que o JavaScript saiba que deve transformar o fluxo daquela função específica em um comportamento assíncrono (gerenciando a pausa e a retomada).

// 6
async function buscarProduto(id) {
  return new Promise((resolve) => {
    setTimeout(() => {
      resolve({ id, nome: "Produto " + id });
    }, 1000);
  });
}

// 7
// O erro é que a função carregarDados não foi declarada com a palavra-chave async, o que impede o uso do await dentro dela.

// 8
const dados = await resposta.json();

// 9
// Na falha de requisição (sem internet), a conexão nem acontece, então o fetch rejeita a Promise. No erro do servidor (404/500), a comunicação aconteceu com sucesso e o servidor respondeu. O fetch só rejeita a Promise se a requisição não for concluída; respostas de erro de HTTP ainda são respostas válidas.

// 10
// Porque o .map() roda de forma síncrona e imediata para todos os itens, disparando as funções assíncronas ao mesmo tempo e retornando uma lista cheia de Promises pendentes, em vez de esperar cada uma terminar.