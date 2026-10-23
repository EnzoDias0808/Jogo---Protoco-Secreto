function Cabecalho() {
  return (
    <hearder>
        <h1>Protocolo Secreto</h1>
        <p>Um jogo de investigação, para descobrir o suspeito e desvendar os ministérios.</p>
    </hearder>
  );
}

function Cartao() {
  return (
    <div>
        <h3>Protocolo Secreto</h3>
        <p>Um jogo de investigação, para descobrir o suspeito e desvendar os ministérios..</p>
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