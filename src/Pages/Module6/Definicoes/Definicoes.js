import React from 'react';

const Definicoes = () => {
  return (
    <div>
      <h1>Definições</h1>
      <div
        style={{
          backgroundColor: '#ede8e8',
          padding: '0.5rem',
          marginTop: '1rem',
          border: '1px solid black',
        }}
      >
        <li>
          <b>BrowserRouter</b> - Componente que irá envolver tudo que depende do
          react-router
        </li>
        <li>
          <b>Routes</b> - Define área que estarão os componentes 'Route'
        </li>
        <li>
          <b>Route</b> - Recebe caminho em 'path' e renderiza 'element'
        </li>
        <li>
          <b>Link</b> - Modifica a rota e renderiza o novo componente sem
          recarregar a página
        </li>
        <li>
          <b>NavLink</b> - Igual o Link, mas mostra qual página está ativa no
          momento - especificar 'end' na página principal ('/')
        </li>
        <li>
          <b>useNavigate</b> - Permite navegar programaticamente entre rotas -
          Exemplo: enviar usuário do login pra a página da conta dele
        </li>
        <li>
          <b>useParams</b> - Rota dinâmica, nome será utilizado como váriavel
          dentro do componente - path='produto/:id'
        </li>
        <li>
          <b>useLocation</b> - Informações da rota
        </li>
      </div>
    </div>
  );
};

export default Definicoes;
