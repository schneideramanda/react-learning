import React from 'react';
import { GlobalStorage } from './GlobalContextCount';
import { GlobalContext } from './GlobalContextCount';

const UseContext1 = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - Contador</h4>
      <GlobalStorage>
        <Produto />
      </GlobalStorage>
    </div>
  );
};

const Produto = () => {
  const global = React.useContext(GlobalContext);
  return (
    <div>
      <p>Produto: {global.contar}</p>
      <button onClick={() => global.adicionarUm()}>Adicionar</button>
    </div>
  );
};

export default UseContext1;
