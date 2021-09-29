import React from 'react';

const UseEffect = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - Exemplos de utilização: </h4>
      <h6>
        1.1 - Executar o código novamente quando mudar -{' '}
        <span>React.useEffect ((), [])</span>
      </h6>
      <h6>
        1.2 - Executar o código novamente quando 'contar' mudar -{' '}
        <span>React.useEffect ((), [contar])</span>
      </h6>
    </div>
  );
};

export default UseEffect;
