import React from 'react';
import CSS from './CSS/CSS';
import { Routes, Route, Link } from 'react-router-dom';
import Animacoes from './Animacoes/Animacoes';
import Imagens from './Imagens/Imagens';
import { Helmet } from 'react-helmet';

const HomeModule5 = () => {
  return (
    <div>
      <Helmet>
        <title>React | Módulo 5</title>
        <meta
          name='description'
          content='Essa é a página do módulo 5 do projeto'
        />
      </Helmet>
      <h4>Módulo 5 - CSS</h4>
      <h4>Por favor, selecione um tópico</h4>
      <nav>
        <Link className='linkTab' to='import'>
          Import
        </Link>
        <Link className='linkTab' to='animacoes'>
          Animações
        </Link>
        <Link className='linkTab' to='imagens'>
          Imagens
        </Link>
      </nav>

      <Routes>
        <Route path='imagens' element={<Imagens />} />
        <Route path='animacoes' element={<Animacoes />} />
        <Route path='import' element={<CSS />} />
      </Routes>
    </div>
  );
};

export default HomeModule5;
