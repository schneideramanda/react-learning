import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Definicoes from './Definicoes/Definicoes';
import { Helmet } from 'react-helmet';
import Desafio from './Desafios/Desafio';

const HomeModule6 = () => {
  return (
    <div>
      <Helmet>
        <title>React | Módulo 6</title>
        <meta
          name='description'
          content='Essa é a página do módulo 6 do projeto'
        />
      </Helmet>
      <h4>Módulo 6 - React Router</h4>
      <li>Usado para navegar na página</li>
      <h4>Por favor, selecione um tópico</h4>
      <nav>
        <Link className='linkTab' to='definicoes'>
          Definições Básicas
        </Link>
        <Link className='linkTab' to='desafio'>
          Desafio{' '}
        </Link>
      </nav>
      <Routes>
        <Route path='definicoes' element={<Definicoes />} />
        <Route path='desafio/*' element={<Desafio />} />
      </Routes>
    </div>
  );
};

export default HomeModule6;
