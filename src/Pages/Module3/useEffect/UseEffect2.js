import React from 'react';

const UseEffect2 = () => {
  const [produto, setProduto] = React.useState(null);

  React.useEffect(() => {
    const produtoLocal = localStorage.getItem('produto');
    if (produtoLocal !== null) setProduto(produtoLocal);
  }, []);

  React.useEffect(() => {
    window.localStorage.setItem('produto', produto);
  }, [produto]);

  function handleClick({ target }) {
    setProduto(target.innerText);
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
      <h4>2 - Guardando preferência do usuário no localStorage </h4>
      <p>Preferência : {produto}</p>
      <button onClick={handleClick} style={{ margin: '.5rem' }}>
        Notebook
      </button>
      <button onClick={handleClick} style={{ margin: '.5rem' }}>
        Tablet
      </button>
      <Produto produto={produto} />
    </div>
  );
};

const Produto = ({ produto }) => {
  const [dados, setDados] = React.useState(null);

  React.useEffect(() => {
    if (produto !== null) {
      fetch(`https://ranekapi.origamid.dev/json/api/produto/${produto}`)
        .then((response) => response.json())
        .then((json) => setDados(json));
    }
  }, [produto]);

  if (dados === null) return null;
  return (
    <div>
      <p>{dados.nome}</p>
      <p>R$ {dados.preco}</p>
      <img src={dados.fotos[0].src} alt={dados.fotos[0].titulo} />
    </div>
  );
};

export default UseEffect2;
