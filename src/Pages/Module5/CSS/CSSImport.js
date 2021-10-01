import React from 'react';

const CSSImport = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - CSS Import</h4>
      <li>import './App.css'</li>
      <li>className = 'AppTitulo'</li>
      <li>Garantir que os seletores sejam específicos para evitar conflitos</li>
      <li>Boa prática: .(nomeComponente)(seletor)</li>
      <p>Exemplo: .App h1 ou .AppTitulo</p>
    </div>
  );
};

export default CSSImport;
