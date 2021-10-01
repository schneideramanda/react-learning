import React from 'react';
import { Routes, Route, Link } from 'react-router-dom';
import Checkbox from './Checkbox/Checkbox';
import Componente from './Componentes/Componente';
import Desafio from './Desafio/Desafio';
import Input from './InputText/Input';
import Radio from './Radio/Radio';
import Select from './Select/Select';
import Validacao from './Validacao/Validacao';
import { Helmet } from 'react-helmet';

const HomeModule4 = () => {
  return (
    <div>
      <Helmet>
        <title>React | Módulo 4</title>
        <meta
          name='description'
          content='Essa é a página do módulo 4 do projeto'
        />
      </Helmet>
      <h4>Módulo 4 - Formulários</h4>
      <h4>Por favor, selecione um tópico</h4>
      <nav>
        <Link className='linkTab' to='input'>
          Input / TextArea
        </Link>
        <Link className='linkTab' to='select'>
          Select
        </Link>
        <Link className='linkTab' to='radio'>
          Radio
        </Link>
        <Link className='linkTab' to='checkbox'>
          Checkbox
        </Link>
        <Link className='linkTab' to='componentes'>
          Componentes
        </Link>
        <Link className='linkTab' to='validacao'>
          Validação
        </Link>
        <Link className='linkTab' to='desafio-form'>
          Desafio Form
        </Link>
      </nav>

      <Routes>
        <Route path='desafio-form' element={<Desafio />} />
        <Route path='validacao' element={<Validacao />} />
        <Route path='componentes' element={<Componente />} />
        <Route path='checkbox' element={<Checkbox />} />
        <Route path='radio' element={<Radio />} />
        <Route path='select' element={<Select />} />
        <Route path='input' element={<Input />} />
      </Routes>
    </div>
  );
};

export default HomeModule4;
