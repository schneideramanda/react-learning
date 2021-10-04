import React from 'react';
import { Helmet } from 'react-helmet';
import { Routes, Route, Link } from 'react-router-dom';
import LazySuspense from './LazySuspense';
import Memo from './Memo';
import PropTypes from './PropTypes';
import UseReducer from './UseReducer';

const HomeModule7 = () => {
  return (
    <div>
      <h4>Módulo 7 - Mais React</h4>
      <h4>Por favor, selecione um tópico</h4>
      <Helmet>
        <title>React | Módulo 7</title>
        <meta
          name='description'
          content='Essa é a página do módulo 7 do projeto'
        />
      </Helmet>
      <nav>
        <Link className='linkTab' to='proptypes'>
          PropTypes
        </Link>
        <Link className='linkTab' to='lazysuspense'>
          Lazy e Suspense
        </Link>
        <Link className='linkTab' to='memo'>
          Memo
        </Link>
        <Link className='linkTab' to='usereducer'>
          useReducer
        </Link>
      </nav>
      <Routes>
        <Route path='usereducer' element={<UseReducer />} />
        <Route path='memo' element={<Memo />} />
        <Route path='lazysuspense' element={<LazySuspense />} />
        <Route path='proptypes' element={<PropTypes />} />
      </Routes>
    </div>
  );
};

export default HomeModule7;
