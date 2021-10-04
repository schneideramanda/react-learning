import React from 'react';

function reducer(state, action) {
  switch (action) {
    case 'AUMENTAR':
      return state + 1;
    case 'DIMINUIR':
      return state - 1;
    default:
      throw new Error();
  }

  // if (action === 'aumentar') {
  //   return state + 1;
  // }
  // if (action === 'diminuir') {
  //   return state - 1;
  // }
  // return new Error('Erro: action não existe');
}

const UseReducer1 = () => {
  const [state, dispatch] = React.useReducer(reducer, 0);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4> 1 - Função para contar </h4>
      <button onClick={() => dispatch('AUMENTAR')}>+</button>
      <button
        onClick={() => dispatch('DIMINUIR')}
        style={{ marginLeft: '1rem' }}
      >
        -
      </button>
      <p style={{ display: 'inline', marginLeft: '2rem' }}>{state}</p>
    </div>
  );
};

export default UseReducer1;
