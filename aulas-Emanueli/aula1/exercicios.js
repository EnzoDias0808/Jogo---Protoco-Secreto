// 1
const dobro = nums.map(n => n * 2);

// 2
const pares = nums.filter(n => n % 2 === 0);

// 3
// O map transforma cada elemento de uma lista criando uma nova lista com o mesmo tamanho enquanto o filter seleciona apenas os elementos que atendem a uma condição gerando uma lista menor ou de mesmo tamanho.

// 4
const { titulo, preco } = p;

// 5
const ehCaro = preco => preco > 100;

// 6
const cores2 = [...cores, "vermelho"];

// 7
const pEmPromocao = { ...p, preco: 20 };

// 8
const emEstoque = produtos.filter(p => p.estoque > 0).map(p => p.nome);

// 9
// O erro é que a arrow function utiliza chaves {} mas não possui a palavra-chave return, fazendo com que o .map() retorne um array cheio de undefined. Para corrigir, basta remover as chaves para ter um retorno implícito: const total = precos.map((p) => p * 2);

// 10
// A diferença é que import Botao busca a exportação padrão (export default) do arquivo, permitindo que você o importe com qualquer nome, enquanto import { Botao } busca uma exportação nomeada (export const Botao), exigindo que você use exatamente o mesmo nome definido no arquivo de origem.

// 11
// O uso de lista.push(novo) é um problema porque ele modifica o estado original diretamente (mutação). Como a referência do array na memória continua a mesma, o React não percebe a mudança e não atualiza a tela, além de quebrar a previsibilidade do ciclo de renderização.

// 12
const maisQueCinco = produtos.filter(p => p.estoque > 5).map(p => p.nome);
