import React from 'react';

const UseRef1 = () => {
  const [comentarios, setComentarios] = React.useState(['teste1', 'teste2']);
  const [input, setInput] = React.useState('');
  const inputElement = React.useRef();

  function handleClick() {
    if (input !== '') {
      setComentarios([...comentarios, input]);
    } else {
      alert('Sem comentários vazios!');
    }
    setInput('');
    inputElement.current.focus();
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
      <h4>
        1 - Lista de comentários, permitindo que o usuário escreva mais
        comentários
      </h4>
      <ul>
        {comentarios.map((comentario, index) => (
          <li key={index}>{comentario}</li>
        ))}
      </ul>
      <input
        type='text'
        ref={inputElement}
        value={input}
        onChange={({ target }) => setInput(target.value)}
      />
      <br />
      <button onClick={handleClick}>Enviar</button>
    </div>
  );
};

export default UseRef1;
