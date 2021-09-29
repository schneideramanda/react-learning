import React from 'react';

const buttons = [
  {
    type: 'notebook',
    title: 'Notebook',
  },
  {
    type: 'tablet',
    title: 'Tablet',
  },
  {
    type: 'smartphone',
    title: 'Smartphone',
  },
];

const UseState3 = () => {
  const [dados, setDados] = React.useState(null);
  const [carregando, setCarregando] = React.useState(null);

  async function handleClick(title) {
    setCarregando(true);
    const response = await fetch(
      `https://ranekapi.origamid.dev/json/api/produto/${title}`
    );
    const json = await response.json();
    setDados(json);
    setCarregando(false);
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
      <h4>3 - Fetch com mensagem de carregando </h4>
      {buttons.map((btn) => (
        <Button key={btn.type} title={btn.title} click={handleClick} />
      ))}
      {carregando && <p>Carregando...</p>}
      {!carregando && dados && (
        <Produto nome={dados.nome} preco={dados.preco} foto={dados.fotos[0]} />
      )}
    </div>
  );
};

const Button = ({ title, click }) => {
  return (
    <button onClick={() => click(title)} style={{ margin: '0.5rem' }}>
      {title}
    </button>
  );
};

const Produto = ({ nome, preco, foto }) => {
  return (
    <div>
      <p>{nome}</p>
      <p>R$ {preco}</p>
      <img src={foto.src} alt={foto.titulo} />
    </div>
  );
};

export default UseState3;
