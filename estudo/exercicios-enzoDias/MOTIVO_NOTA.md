# Motivo da nota: Enzo Dias

Enzo, tua nota ficou **3,10 de 4,00** no primeiro momento. Ainda tem a avaliação prática, que vale 1 ponto, então a nota final do momento sai depois dela.

| Parte | Nota |
|---|---|
| Aulas 01 a 05 | 1,80 de 2,00 |
| Atividade da Aula 05 | 0,50 de 1,00 |
| Caderno | 0,80 de 1,00 |

Cada aula vale 0,40; aula incompleta ou que não abre vale 0,20; sem entrega vale 0,00. Não houve desconto por cópia.

**Onde a nota se perdeu:** faltaram 0,90 dos 4,00: 0,20 na Aula 03, que não tem os experimentos respondidos, 0,50 na Atividade, que foi feita em HTML e JavaScript puros e não como componente React com props, e 0,20 no Caderno, entregue com 80% do conteúdo.

## Aula 01: JavaScript moderno (0,40 de 0,40)

Arquivos: `estudo/exercicios-enzoDias/aula01/ex1.js` a `ex12.js`

Os 12 itens estão feitos e corretos, com as respostas escritas explicando a diferença entre map e filter (3), o retorno que falta nas chaves (9), o `export default` contra o export nomeado (10) e a mutação do `push` (11). Cada `exN.js` usa `nums`, `p`, `cores` e `produtos` sem declarar, e isso não custou nada.

## Aula 02: Promise e async/await (0,40 de 0,40)

Arquivos: `estudo/exercicios-enzoDias/aula02/ex1.js` a `ex10.js`

As 10 perguntas estão respondidas, com o `try/catch` com await (3), o `buscarProduto` com `setTimeout` (6), o `await resposta.json()` (8), a diferença entre falha de requisição e erro HTTP (9) e o `Promise.all` para o `map` com async (10).

## Aula 03: lista em JavaScript puro (0,20 de 0,40)

Arquivos: `estudo/exercicios-enzoDias/aula03/index.html` e `estudo/exercicios-enzoDias/aula03/registro.txt`

A página abre e funciona, apesar das tags `<html>`, `<head>` e `<body>` repetidas dentro do corpo, com o contador, o campo, o botão Adicionar e o `desenhar()`, e o `registro.txt` tem as 3 linhas sobre o experimento 2. Faltam as respostas dos 4 experimentos: o registro diz que o texto digitado sumiu, mas nenhum arquivo mostra o que aconteceu nos experimentos 1, 3 e 4. Isso custou 0,20. Para fechar: responder os 4 experimentos num `aula03.txt` ao lado da página.

## Aula 04: React por CDN (0,40 de 0,40)

Arquivo: `estudo/exercicios-enzoDias/aula04/index.html` (30/10)

A página abre e renderiza com App, Cabecalho e uma Lista com `map` e `key`. Existe um só `Cartao`, com os três conteúdos escritos dentro dele, em vez de três usos do mesmo componente, e não há o registro comparando as linhas da lista em React e em JavaScript. Nenhum dos dois custou nada.

## Aula 05: chaves, ternário e className (0,40 de 0,40)

Arquivo: `estudo/exercicios-enzoDias/aula05/index.html`

A página abre, com `{projeto}` no Cabecalho, o ternário dentro de um `<span>` com `className` `feita` ou `pendente` e a classe `destaque` no Cartao. Não usa Fragment e não tem o registro, e isso não custou nada.

## Atividade da Aula 05: tela do grupo em componentes (0,50 de 1,00)

Arquivo: `estudo/exercicios-enzoDias/aula05/index2.html` (09/11)

É a tela do Diário de Treinos em HTML, CSS e JavaScript puros, com 715 linhas, sem React e sem props, então vale a faixa da atividade estática, 0,50. Não tem `// MEU COMPONENTE` nem o registro de 3 linhas. O CSS no começo do arquivo também esconde com `display: none !important` as classes `.cabecalho`, `.lista-treinos`, `.mensagem-vazia`, `.botao-novo` e `.formulario`, e isso esconde justamente o que a tela mostra. Os 0,50 que faltam vêm de ela não ser um componente React com props. Para a prática: escolher um componente da tela, refazer em `aula05-enzo/index.html` com React por CDN e props, marcar com `// MEU COMPONENTE` e escrever as 3 linhas.

## Caderno (0,80 de 1,00)

Entregue com 80% do conteúdo.
