import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Contatos from './Contatos';
import Produtos from './Produtos';
import './Desafio.css';
import Header from './Header';
import Footer from './Footer';
import Produto from './Produto';

const Desafio = () => {
  return (
    <div>
      <h1>Desafio</h1>
      <li>Aba de produtos e informações adicionais quando clicar neles</li>
      <li>Aba de contatos</li>
      <li>Animações e loading</li>
      <li>Nome do documento</li>

      <div
        style={{
          backgroundColor: '#ede8e8',
          padding: '0.5rem',
          marginTop: '1rem',
          border: '1px solid black',
        }}
        className='desafio'
      >
        <Header />
        <div className='content'>
          <Routes>
            <Route path='' element={<Produtos />} />
            <Route path='produto/:id' element={<Produto />} />
            <Route path='contato' element={<Contatos />} />
          </Routes>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default Desafio;
