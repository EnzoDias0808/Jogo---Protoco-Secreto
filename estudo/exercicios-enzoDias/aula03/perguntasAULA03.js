//1- Esqueça de propósito. Comente a linha desenhar() de dentro do clique. Adicione uma tarefa. O dado entrou no vetor? Como você prova isso? E a tela, o que mostra?
//Sim, a tarefa foi adicionada ao vetor, mas não aparece na tela porque a função desenhar() não foi chamada. Para conferir, podemos usar console.log(tarefas) e ver se a nova tarefa está lá.

//2-Perca o que foi digitado. Coloque um <input> dentro de cada <li>. Digite algo em um deles e clique em Adicionar. O que aconteceu com o que você digitou? Explique a causa.
//O texto que digitei sumiu quando cliquei em Adicionar. Isso aconteceu porque a função desenhar() apaga a lista e cria tudo de novo, e o texto não estava salvo no vetor.

//3- Conte quantos lugares. Faça a tela mostrar também quantas tarefas estão feitas e um aviso quando a lista estiver vazia. Quantos trechos diferentes do código você precisou tocar?
//Precisei mexer em duas partes: no HTML, para colocar os novos espaços de informação, e no JavaScript, dentro da função desenhar(), para contar as tarefas feitas e mostrar o aviso quando a lista estiver vazia.

//4-Quebre a cola. Renomeie no HTML o id="lista" para id="listaTarefas" e não mexa no JavaScript. O navegador reclama? Onde e quando o erro aparece?
//Sim, aparece um erro no Console do navegador (F12), porque o JavaScript continua procurando o ID "lista", que foi alterado no HTML. O erro acontece quando a função desenhar() tenta acessar esse elemento.