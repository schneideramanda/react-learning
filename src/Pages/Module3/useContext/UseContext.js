import React from 'react';
import UseContext1 from './UseContext1';
import UseContext2 from './UseContext2';

const UseContext = () => {
  return (
    <div>
      <h1>useContext</h1>
      <li>
        Possibilita a criação de estados e dados globais que todos componentes
        podem ter acesso
      </li>
      <li>
        Deixa todos estados que podem ser reutilizados em um mesmo context
      </li>
      <UseContext1 />
      <UseContext2 />
    </div>
  );
};

export default UseContext;
