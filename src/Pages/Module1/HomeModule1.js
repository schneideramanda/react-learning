import React from 'react';
import { ExemploChildren, Expenses, ListaProdutos } from './Expenses';
import { Helmet } from 'react-helmet';

const HomeModule1 = () => {
  return (
    <div>
      <Helmet>
        <title>React | Módulo 1</title>
        <meta
          name='description'
          content='Essa é a página do módulo 1 do projeto'
        />
      </Helmet>
      <h4>Módulo 1 - Exemplos básicos</h4>
      <Expenses />
      <ListaProdutos />
      <ExemploChildren />
    </div>
  );
};

export default HomeModule1;
