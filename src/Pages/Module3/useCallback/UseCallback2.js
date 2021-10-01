import React from 'react';

const UseCallback2 = () => {
  const [contar, setContar] = React.useState(0);

  const handleClick = React.useCallback(() => {
    setContar((contar) => contar + 1);
  }, []);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <p> const handleClick = React.useCallback()</p>
      <p>
        Função de contar internamente sendo passada como parâmetro de setContar
      </p>
      <p>Array vazio como dependência</p>
      <button onClick={handleClick}>{contar}</button>
    </div>
  );
};

export default UseCallback2;
