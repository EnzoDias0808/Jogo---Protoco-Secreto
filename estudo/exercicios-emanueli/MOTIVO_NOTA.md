# Motivo da nota: Emanueli

Emanueli, tua nota ficou **3,60 de 4,00** no primeiro momento. Ainda tem a avaliação prática, que vale 1 ponto, então a nota final do momento sai depois dela.

| Parte | Nota |
|---|---|
| Aulas 01 a 05 | 1,60 de 2,00 |
| Atividade da Aula 05 | 1,00 de 1,00 |
| Caderno | 1,00 de 1,00 |

Cada aula vale 0,40; aula incompleta ou que não abre vale 0,20; sem entrega vale 0,00. Não houve desconto por cópia.

**Onde a nota se perdeu:** faltaram 0,40 dos 4,00. A Atividade e o Caderno vieram completos, e a perda está toda nas Aulas 04 e 05, que valem 0,20 cada porque nenhuma das duas faz o que a aula pedia. As Aulas 01, 02 e 03 estão inteiras.

## Aula 01: JavaScript moderno (0,40 de 0,40)

Arquivos: `estudo/exercicios-emanueli/aula1/ex1.js` a `ex12.js`

Os 12 itens estão feitos e corretos, e as respostas escritas explicam bem: a 9 diz que as chaves tiram o retorno implícito e mostra a correção, a 10 separa `export default` de export nomeado e a 11 explica a mutação do `push`. Cada `exN.js` usa `nums`, `p`, `cores` e `produtos` sem declarar, e isso não custou nada.

## Aula 02: Promise e async/await (0,40 de 0,40)

Arquivo: `estudo/exercicios-emanueli/aula2/exercicio.js`

As 10 perguntas estão respondidas, com o `try/catch` com await (3), o `buscarProduto` com `setTimeout` (6), a diferença entre falha de requisição e erro 404 (9) e a explicação de que o `map` com async devolve Promises pendentes (10). O item 8 traz só a linha `const dados = await resposta.json();`, sem a função em volta, mas isso não custou nada.

## Aula 03: lista em JavaScript puro (0,40 de 0,40)

Arquivos: `estudo/exercicios-emanueli/aula3/index.html` e `estudo/exercicios-emanueli/aula3/perguntas.js`

O `index.html` abre e funciona, com o contador, o campo, o botão Adicionar e o `desenhar()`, e o `perguntas.js` responde os 4 experimentos com a explicação certa: no 1 o dado entra no vetor e a tela não muda, no 2 o texto digitado some porque o `innerHTML` recria tudo, no 3 foram dois lugares tocados e no 4 o erro aparece no console quando o `desenhar()` roda. O registro de 3 linhas não está no arquivo, e o `aula3/index2.html` não roda porque tem `useState` e JSX dentro de um `<script>` comum, mas nenhum dos dois custou nada.

## Aula 04: React por CDN (0,20 de 0,40)

Arquivo: `estudo/exercicios-emanueli/aula4/index.html`

A página não renderiza. Depois dos três `<script src="https://unpkg.com/...">` falta a abertura `<script type="text/babel">`, então Cabecalho, Cartao, App e Lista aparecem escritos como texto solto no corpo da página e nada roda. Existem ainda duas funções `App` no arquivo, a de Cabecalho com três `Cartao` e a de `<h1>Olá, React</h1>`, e a segunda sobrescreve a primeira; a Lista nem é usada dentro do App. Isso custou 0,20. Para fechar: abrir `<script type="text/babel">` antes das funções, apagar o `App` de "Olá, React" e colocar `<Lista />` dentro do `App`.

## Aula 05: chaves, ternário e className (0,20 de 0,40)

Arquivo: `estudo/exercicios-emanueli/aula5/index.html`

A página abre, mas é HTML e CSS puros, sem React: não tem `{projeto}`, nem o ternário `t.feita ? "(feita)" : "(pendente)"`, nem `className`, nem Fragment, e a lista tem dois `<li>` escritos à mão. O comentário no fim diz que tentaste usar o código da aula anterior e não funcionou, e de fato a Aula 04 não renderiza, então o problema da Aula 05 vem de lá. Isso custou 0,20. Para fechar: corrigir a Aula 04 e repetir nela o que a Aula 05 pede, `{projeto}` no Cabecalho, o ternário na Lista, `className="destaque"` no Cartao e um Fragment.

## Atividade da Aula 05: tela do grupo em componentes (1,00 de 1,00)

Arquivos: `pratica2/index.html`, `pratica2/style.css` e `pratica2/registro.md` (commit teu, 06/11)

O `CartaoTreino({ nome, duracao, feito })` recebe props, usa o ternário para a classe e o texto e aparece repetido dentro da `ListaDeTreinos` com `map` e `key`. O registro tem as 3 linhas. A pasta está na raiz do repositório e não dentro da tua, e falta o comentário `// MEU COMPONENTE`, mas nenhum dos dois custou nada.

## Caderno (1,00 de 1,00)

Entregue completo.
