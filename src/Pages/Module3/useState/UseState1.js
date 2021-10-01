import React from 'react';

const UseState1 = () => {
  const [ativo, setAtivo] = React.useState(false);
  const [dados, setDados] = React.useState({ nome: 'Alicia', idade: '8' });

  function handleClick() {
    setAtivo(!ativo);
    // ...dados makes the whole array repeat and just adds at the end of it anything you want
    setDados({ ...dados, escolaridade: 'Fundamental' });
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
      <h4>1 - Começando a acessar estados</h4>
      <p>Nome: {dados.nome}</p>
      <p>Idade: {dados.idade}</p>
      <p>Escolaridade: {ativo && dados.escolaridade}</p>
      <button onClick={handleClick}>{ativo ? 'Ativo' : 'Inativo'}</button>
    </div>
  );
};
export default UseState1;
