import React from 'react';
import ValidacaoEx from './ValidacaoEx';

const Validacao = () => {
  return (
    <div>
      <h1>Validação</h1>
      <li>Validação feita no 'onBlur' - quando o campo fica fora de foco</li>
      <li>Validação REGEX</li>
      <ValidacaoEx />
    </div>
  );
};

export default Validacao;
