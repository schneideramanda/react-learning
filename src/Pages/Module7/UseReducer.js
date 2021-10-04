import React from 'react';
import UseReducer1 from './UseReducer1';
import UseReducer2 from './UseReducer2';

const UseReducer = () => {
  return (
    <div>
      <h1>useReducer</h1>
      <li>Lida com estados que possuem funções fixas para modificar eles</li>
      <li>
        Declaração do estado - const [state,dispatch] =
        React.useReducer(reducer, 0) - função e valor inicial
      </li>
      <li>dispatch - manda ações para a função</li>
      <UseReducer1 />
      <UseReducer2 />
    </div>
  );
};

export default UseReducer;
