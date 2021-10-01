import React from 'react';

const CSSModules = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>2 - CSS Modules</h4>
      <li>import styles from './Produto.module.css'</li>
      <li>className = &#123; styles.titulo &#125;</li>
      <li>
        Garante que as classes usadas sempre sejam únicas, evitando conflitos
      </li>
      <li>Cria objeto dos estilos</li>
      <li>camelCase</li>
    </div>
  );
};

export default CSSModules;
