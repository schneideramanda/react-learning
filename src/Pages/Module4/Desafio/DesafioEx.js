import React from 'react';
import DesafioForm from './DesafioForm';

const perguntas = [
  {
    pergunta: 'Qual método é utilizado para criar componentes?',
    options: [
      'React.makeComponent()',
      'React.createComponent()',
      'React.createElement()',
    ],
    resposta: 'React.createElement()',
    id: 'p1',
  },
  {
    pergunta: 'Como importamos um componente externo?',
    options: [
      'import Component from "./Component"',
      'require("./Component")',
      'import "./Component"',
    ],
    resposta: 'import Component from "./Component"',
    id: 'p2',
  },
  {
    pergunta: 'Qual hook não é nativo?',
    options: ['useEffect()', 'useFetch()', 'useCallback()'],
    resposta: 'useFetch()',
    id: 'p3',
  },
  {
    pergunta: 'Qual palavra deve ser utilizada para criar um custom hook?',
    options: ['set', 'get', 'use'],
    resposta: 'use',
    id: 'p4',
  },
];

const DesafioEx = () => {
  const [respostas, setRespostas] = React.useState({
    p1: '',
    p2: '',
    p3: '',
    p4: '',
  });
  const [slide, setSlide] = React.useState(0);
  const [resultado, setResultado] = React.useState(null);

  function handleChange({ target }) {
    setRespostas({ ...respostas, [target.id]: target.value });
  }

  function exibirResultado() {
    const corretas = perguntas.filter(
      ({ id, resposta }) => respostas[id] === resposta
    );
    setResultado(`Você acertou ${corretas.length} de ${perguntas.length} `);
  }

  function handleProxima() {
    if (slide < perguntas.length - 1) {
      setSlide(slide + 1);
    } else {
      setSlide(slide + 1);
      exibirResultado();
    }
  }

  function handleAnterior() {
    console.log(slide);
    if (slide !== 0) {
      setSlide(slide - 1);
    }
  }

  return (
    <form
      onSubmit={(event) => event.preventDefault()}
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
        overflow: 'hidden',
      }}
    >
      {perguntas.map((pergunta, index) => (
        <DesafioForm
          active={slide === index}
          value={respostas[pergunta.id]}
          onChange={handleChange}
          key={pergunta.id}
          {...pergunta}
        />
      ))}
      {resultado ? (
        <p>{resultado}</p>
      ) : (
        <div>
          <p style={{ textAlign: 'center', margin: ' auto' }}>
            {slide + 1} / {perguntas.length}
          </p>
          <button onClick={handleProxima} style={{ float: 'right' }}>
            Próxima
          </button>
        </div>
      )}
      {slide !== 0 && slide !== 4 && (
        <button onClick={handleAnterior} style={{ float: 'left' }}>
          Anterior
        </button>
      )}
    </form>
  );
};

export default DesafioEx;
