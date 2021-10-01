import React from 'react';
import '../../../App.css';

const Animacoes1 = () => {
  const [ativar, setAtivar] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - Animation</h4>
      <button onClick={() => setAtivar(!ativar)}>Ativar</button>
      {ativar && <Produto />}
    </div>
  );
};

const Produto = () => {
  return (
    <div className='animeLeft'>
      <h4>Produto</h4>
      <p>Produto ativo</p>
    </div>
  );
};

export default Animacoes1;
