import React from 'react';
import { GlobalContext } from './GlobalContentFetch';
import { GlobalStorage } from './GlobalContentFetch';

const UseContext2 = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>2 - Listar fetch e botão para limpar dados</h4>
      <GlobalStorage>
        <Produto />
        <Limpar />
      </GlobalStorage>
    </div>
  );
};

const Produto = () => {
  const { dados } = React.useContext(GlobalContext);
  if (dados === null) return null;
  return (
    <div>
      <p>Produtos:</p>
      {dados.map((produto) => (
        <li key={produto.id}>{produto.nome}</li>
      ))}
    </div>
  );
};

const Limpar = () => {
  const { limparDados } = React.useContext(GlobalContext);
  return <button onClick={limparDados}>Limpar</button>;
};

export default UseContext2;
