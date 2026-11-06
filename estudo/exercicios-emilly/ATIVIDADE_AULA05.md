# Atividade da Aula 05: a tela do grupo em componentes

**Prazo:** sexta, 30/10

Em grupo, escolham **uma tela que já sabem fazer** e dividam em componentes. Cada integrante pega um componente e constrói o seu. No fim, o grupo junta tudo e a tela aparece completa.

## Passo 1: escolham a tela (no grupo)

Uma das 3 telas do Diário de Treinos no Figma (lista, formulário ou confirmar exclusão) ou a tela que vocês já têm no projeto.

Figma: https://www.figma.com/design/9WtgGKcm4pMlm5GRiAuhn7/Di%C3%A1rio-de-Treinos---Kit-2C

Escolham uma tela que dê para fazer só com o que vimos até a Aula 05.

## Passo 2: dividam em componentes (no grupo)

Exemplo da lista de treinos: `Cabecalho`, `CartaoResumo`, `CartaoTreino`, `Campo`, `Botao`. Cada integrante assume **1 componente**. Escrevam no README quem pegou qual.

## Passo 3: cada um constrói o seu componente (individual)

Na sua pasta, em `aula05-SEUNOME/index.html`, faça o seu componente com React por CDN, igual na Aula 05:

- props para os textos que mudam (nome, duração, mensagem);
- `map` com `key` se o seu componente for uma lista;
- ternário e `className` onde fizer sentido;
- dados fixos num array no próprio arquivo, sem API por enquanto;
- um comentário marcando o seu código: `// MEU COMPONENTE`.

Os outros pedaços podem ficar como uma `div` simples, só para o seu componente aparecer no lugar certo.

## Passo 4: juntem a tela (no grupo)

Um integrante monta o `index.html` do grupo copiando cada componente e **mantendo o código de quem escreveu**. Esse arquivo vai na pasta do grupo.

## Registro (individual, 3 linhas)

Qual componente você fez, o que foi mais difícil e como o seu pedaço se encaixa na tela.

## Como será avaliado

- O componente funciona e usa props: metade da nota.
- Commit seu, com o seu componente.
- Registro explicando o que você fez.
- Tela do grupo montada: bônus para todos do grupo.

## Regra importante

Pode ajudar e fazer junto, mas cada um escreve o seu código e precisa saber explicar. Entregar o arquivo de outra pessoa como seu zera a parte copiada e afeta a nota.
