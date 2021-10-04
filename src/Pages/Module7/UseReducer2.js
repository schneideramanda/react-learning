import React from 'react';

function reducer(state, action) {
  switch (action.type) {
    case 'remover':
      return state.filter((item) => item !== action.content);
    case 'adicionar':
      return [...state, action.content];
    default:
      throw new Error();
  }
}

const UseReducer2 = () => {
  const [state, dispatch] = React.useReducer(reducer, ['Morango', 'Laranja']);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>2 - Array</h4>
      <button onClick={() => dispatch({ type: 'remover', content: 'Morango' })}>
        Remover Morango
      </button>
      <button
        style={{ margin: '0 0 1rem 1rem' }}
        onClick={() => dispatch({ type: 'adicionar', content: 'Limão' })}
      >
        Adicionar Limão
      </button>
      {state.map((item, index) => (
        <li key={item + index}>{item}</li>
      ))}
    </div>
  );
};

export default UseReducer2;
