import React from 'react';
import ComponenteEx from './ComponenteEx';

const Componente = () => {
  return (
    <div>
      <h1>Componentes</h1>
      <li>
        Geralmente esses elementos serão utilizados diversas vezes da mesma
        forma, então cria-se um componente para ser reutilizado
      </li>
      <ComponenteEx />
    </div>
  );
};

export default Componente;
