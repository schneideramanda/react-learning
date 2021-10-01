import React from 'react';
import CustomHook1 from './CustomHook1';
import CustomHook2 from './CustomHook2';

const CustomHook = () => {
  return (
    <div>
      <h1>customHooks</h1>
      <li>
        Função que vai ter hooks do react dentro, mas vão retornar o que você
        quiser usar
      </li>
      <li>Usar hooks SOMENTE dentro de componentes ou custom hooks</li>
      <li>NÃO usar hooks dentro de funções, condicionais e loops</li>
      <CustomHook1 />
      <CustomHook2 />
    </div>
  );
};

export default CustomHook;
