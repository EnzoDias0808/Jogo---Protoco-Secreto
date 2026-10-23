function Cabecalho() {
    return (
    <header>
      <h1>Minha Loja</h1>
      <p>Produtos personalizados feitos para você.</p>
    </header>
  );
}

function Cartao() {
  return (
    <div>
      <h3>Canecas personalizadas</h3>
      <p>Canecas feitas do seu jeito.</p>
    </div>
  );
}

function App() {
  return (
    <div>
      <Cabecalho />
      <Cartao />
      <Cartao />
      <Cartao />
    </div>
  );
}