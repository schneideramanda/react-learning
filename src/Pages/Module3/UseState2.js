import React from 'react';

const UseState2 = () => {
  const [modal, setModal] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>2 - Abrir e fechar modal</h4>
      <p>
        Botão que só aciona quando modal estiver ativo e botão que identifica
        valor anterior do modal
      </p>
      <div>{modal ? 'Modal Aberto' : 'Modal Fechado'}</div>
      <Modal modal={modal} setModal={setModal} />
      <ButtonModal setModal={setModal} />
    </div>
  );
};

const Modal = ({ modal, setModal }) => {
  if (modal === true) {
    return (
      <div>
        Esse é um modal.
        <button onClick={() => setModal(false)}>Fechar</button>
      </div>
    );
  } else {
    return null;
  }
};

// setModal((ativo) => !ativo) makes it possible to access the old value from modal too
const ButtonModal = ({ setModal }) => {
  function handleClick() {
    setModal((ativo) => !ativo);
  }

  return <button onClick={handleClick}>Abrir</button>;
};

export default UseState2;
