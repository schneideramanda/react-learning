import React from 'react';
import { Helmet } from 'react-helmet';

const Home = () => {
  return (
    <div>
      <Helmet>
        <title>React | Home</title>
        <meta name='description' content='Essa é a página inicial do projeto' />
      </Helmet>
      <h1>Página inicial</h1>
      <p>Esta é a página inicial de uma página de teste</p>
      <p>Clique em cada módulo para visualizar os exercícios correspondentes</p>
    </div>
  );
};

export default Home;
