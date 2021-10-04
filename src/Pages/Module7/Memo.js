import React from 'react';

const Memo = () => {
  return (
    <div>
      <h1>Memo</h1>
      <div
        style={{
          backgroundColor: '#ede8e8',
          padding: '0.5rem',
          marginTop: '1rem',
          border: '1px solid black',
        }}
      >
        <h4>1 - Definições</h4>
        <li>
          Retorna um componente memorizado, evitando ser atualizado mesmo que o
          elemento pai mude
        </li>
        <li>
          Usar apenas para elementos que não dependam de estados diferentes -
          ex: Headers
        </li>
        <li>Utilizado na exportação do componente</li>
        <li>export default React.memo(Header)</li>
      </div>
    </div>
  );
};

export default Memo;
