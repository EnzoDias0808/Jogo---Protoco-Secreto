# Motivo da nota: Emilly

Emilly, tua nota ficou **2,10 de 4,00** no primeiro momento. Ainda tem a avaliação prática, que vale 1 ponto, então a nota final do momento sai depois dela.

| Parte | Nota |
|---|---|
| Aulas 01 a 05 | 1,80 de 2,00 |
| Atividade da Aula 05 | 0,30 de 1,00 |
| Caderno | 0,00 de 1,00 |

Cada aula vale 0,40; aula incompleta ou que não abre vale 0,20; sem entrega vale 0,00. Não houve desconto por cópia.

**Onde a nota se perdeu:** faltaram 1,90 dos 4,00. As aulas perderam só 0,20, na Aula 03, que não tem os experimentos. A maior parte está fora delas: 0,70 na Atividade, cujo arquivo é só um começo, e 1,00 no Caderno, que não foi entregue.

## Aula 01: JavaScript moderno (0,40 de 0,40)

Arquivo: `estudo/exercicios-emilly/aula1/aula01.js`

Os 12 itens estão entregues e corretos no código. As respostas escritas são curtas, a 3 diz só que o map transforma e o filter filtra, e a 9 diz que a função não retorna nada, sem mostrar a versão corrigida. Isso não custou nada, mas a explicação completa também faz parte da resposta.

## Aula 02: Promise e async/await (0,40 de 0,40)

Arquivo: `estudo/exercicios-emilly/aula2/aula02.js`

As 10 perguntas têm resposta, com o `try/catch` com await (3), o `buscarProduto` com `setTimeout` (6) e o `await resposta.json()` (8). O item 9 não termina: diz que a diferença está em quem quebrou a comunicação, mas não explica por que o fetch não lança erro no 404. O item 10 diz que o map é síncrono, sem concluir que devolve Promises pendentes nem citar o `Promise.all`. Isso não custou nada.

## Aula 03: lista em JavaScript puro (0,20 de 0,40)

Arquivo: `estudo/exercicios-emilly/aula3/aula03.html`

A página abre e funciona, apesar das tags `<html>`, `<head>` e `<body>` repetidas dentro do corpo, com o contador, o campo, o botão Adicionar e o `desenhar()`. Faltam os 4 experimentos respondidos e o registro de 3 linhas, e isso custou 0,20. Para fechar: fazer os 4 experimentos da aula e escrever as respostas e o registro num `aula03.txt` ao lado da página.

## Aula 04: React por CDN (0,40 de 0,40)

Arquivo: `estudo/exercicios-emilly/aula4/aula4.html` (06/11)

A página abre e renderiza com App, Cabecalho e uma Lista com `map` e `key`. Existe um só `Cartao`, com os três conteúdos escritos dentro dele, em vez de três usos do mesmo componente, e não há o registro comparando as linhas da lista em React e em JavaScript. Nenhum dos dois custou nada.

## Aula 05: chaves, ternário e className (0,40 de 0,40)

Arquivo: `estudo/exercicios-emilly/aula5/index.html` (06/11)

A página abre, com `{projeto}` no Cabecalho, o ternário `t.feita ? " (feita)" : " (pendente)"` dentro de um `<span>` com `className` `feita` ou `pendente`, e a classe `destaque` no Cartao. Não usa Fragment e não tem o registro sobre expressão e comando, e isso não custou nada.

## Atividade da Aula 05: tela do grupo em componentes (0,30 de 1,00)

Arquivos: `estudo/pratica1/index.html` e `estudo/pratica1/style.css` (06/11)

O `index.html` tem só uma função `botão () { ... }` colada como texto dentro do `<body>`, sem `<script>`, sem React e sem props, então a página mostra o código na tela em vez de um botão. Não tem `// MEU COMPONENTE` nem o registro de 3 linhas. O arquivo mostra que começaste pelo botão "Novo treino" e isso vale 0,30; os 0,70 que faltam são o componente funcionando com props, o marcador e o registro. Para a prática: refazer esse botão como componente React (`function Botao({ texto })`) dentro de um `<script type="text/babel">`, marcar com `// MEU COMPONENTE` e escrever as 3 linhas.

## Caderno (0,00 de 1,00)

Não tenho caderno registrado.
