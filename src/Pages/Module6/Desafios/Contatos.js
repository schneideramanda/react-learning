import React from 'react';
import styles from './Contatos.module.css';
import foto from '../../../img/contato.jpeg';
import Head from './Head';

const Contatos = () => {
  return (
    <section className={styles.contato + ' desafioAnimeLeft'}>
      <Head title='Desafio 1 | Contato' description='Entre em contato' />
      <img src={foto} alt='Máquina de escrever' />
      <div>
        <h1>Entre em contato:</h1>
        <ul className={styles.dados}>
          <li>desafio1@teste.com</li>
          <li>99999-9999</li>
          <li>Rua Teste, 000</li>
        </ul>
      </div>
    </section>
  );
};

export default Contatos;
