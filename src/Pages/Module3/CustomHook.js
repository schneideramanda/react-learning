import React from 'react';
import useLocalStorage from './useLocalStorage';

const CustomHook = () => {
  const [produto, setProduto] = useLocalStorage('produto', '');

  function handleClick({ target }) {
    setProduto(target.innerText);
  }

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4> 1 - Salvar preferência do usuário no localStorage</h4>
      <p>Preferência: {produto}</p>
      <button onClick={handleClick} style={{ margin: '.5rem' }}>
        Notebook
      </button>
      <button onClick={handleClick} style={{ margin: '.5rem' }}>
        Tablet
      </button>
    </div>
  );
};

export default CustomHook;
