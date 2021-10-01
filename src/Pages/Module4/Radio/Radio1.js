import React from 'react';

const Radio1 = () => {
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');

  function handleChange({ target }) {
    setProduto(target.value);
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
      <h4>1 - Reatividade e grupos</h4>
      <form style={{ display: 'inline-block' }}>
        <p>Cores : {cor}</p>
        <label>
          <input
            type='radio'
            onChange={({ target }) => setCor(target.value)}
            checked={cor === 'azul'}
            value='azul'
          />
          Azul
        </label>
        <label>
          <input
            type='radio'
            onChange={({ target }) => setCor(target.value)}
            checked={cor === 'vermelho'}
            value='vermelho'
          />
          Vermelho
        </label>
        <p>Produtos: {produto}</p>
        <label>
          <input
            type='radio'
            onChange={handleChange}
            name='produto'
            value='smartphone'
          />
          Smartphone
        </label>
        <label>
          <input
            type='radio'
            onChange={handleChange}
            name='produto'
            value='notebook'
          />
          Notebook
        </label>
      </form>
    </div>
  );
};

export default Radio1;
