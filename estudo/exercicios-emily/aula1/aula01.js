//atv 1
const dobro = nums.map(n => n * 2);

//atv 2
const pares = nums.filter(n => n % 2 === 0);

//atv 3
// O map transforma os dados e filter filtra eles

//atv 4
const {titulo, preco} = p;

//atv 5
const ehCaro = preco => preco > 100;

//atv 6
const cores2 = [...cores, "vermelho"];

//atv 7
const pPromocao = { ...p, preco: 20 };

//atv 8
const emEstoque = produtos
  .filter(produto => produto.estoque > 0)
  .map(produto => produto.nome);

//atv 9
//O erro é que a função não retorna nenhum valor

//atv 10
// O import Botao busca uma exportação default, permitindo que você mude o nome se quiser. O import { Botao } busca uma exportação nomeada específica, exigindo o nome exato.

//atv 11
// Usar lista.push(novo) altera o array original diretamente. No React, isso é um problema grave porque não avisa o componente que ele precisa atualizar a tela, deixando a interface desatualizada

//atv 12
const maisQueCinco = produtos.filter(p => p.estoque > 5).map(p => p.nome);
