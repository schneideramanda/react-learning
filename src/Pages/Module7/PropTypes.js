import React from 'react';

const PropTypes = () => {
  return (
    <div>
      <h1>PropTypes</h1>
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
          Retorna erro caso o valor da propriedade passada seja diferente do
          tipo de dado especificado
        </li>
        <li>Também pode especificar se a propriedade é obrigatória ou não</li>
        <li>import PropTypes from 'prop-types'</li>
        <li>
          'elemento'.propTypes &#123; width: PropTypes.number.isRequired &#125;
        </li>
        <li>
          Valor padrão: 'elemento'.defaultProps &#123; width: '10px' &#125;
        </li>
      </div>
    </div>
  );
};

export default PropTypes;
