import React from 'react';

const Select1 = () => {
  const [select, setSelect] = React.useState('');

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>
        1 - Valor inicial como disabled e sem value para a pessoa selecionar
        algum{' '}
      </h4>
      <form>
        <select
          value={select}
          onChange={({ target }) => setSelect(target.value)}
          id='produtos'
        >
          <option disabled value=''>
            Selecione um produto
          </option>
          <option value='notebook'>Notebook</option>
          <option value='smartphone'>Smartphone</option>
          <option value='tablet'>Tablet</option>
        </select>
        <span style={{ marginLeft: '2rem' }}>{select}</span>
      </form>
    </div>
  );
};

export default Select1;
