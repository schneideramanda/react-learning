import React from 'react';

const ArraysProduct = ({ nome, propriedades }) => {
  return (
    <div>
      <p>{nome}</p>
      <ul>
        {propriedades.map((propriedade) => (
          <li key={propriedade}>{propriedade}</li>
        ))}
      </ul>
    </div>
  );
};

export default ArraysProduct;
