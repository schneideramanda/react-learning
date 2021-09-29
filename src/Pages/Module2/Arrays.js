import React from 'react';
import ArraysProduct from './ArraysProduct';

const produtos = [
  { nome: 'Notebook', propriedades: ['16gb ram', '512gb'] },
  { nome: 'Smartphone', propriedades: ['2gb ram', '128gb'] },
];

const Arrays = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - Arrays e separação de componentes </h4>
      <p>
        <b>...props</b> - Envolve o resto das propriedades que podem ser
        acessadas
      </p>
      {/* ...props -> rest of the properties */}
      {produtos.map((produto) => (
        <ArraysProduct key={produto.nome} {...produto} />
      ))}
    </div>
  );
};

export default Arrays;
