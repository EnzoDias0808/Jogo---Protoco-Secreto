const obterNome = produto => produto.nome;  

const estoqueMaiorQue5 = produtos.filter(p => p.estoque > 5).map(obterNome);   