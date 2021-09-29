import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import CustomHook from './CustomHook';
import CustomHook2 from './CustomHook2';
import UseCallback from './UseCallback';
import UseContext from './UseContext';
import UseContext2 from './UseContext2';
import UseEffect from './UseEffect';
import UseEffect2 from './UseEffect2';
import UseMemo from './UseMemo';
import UseRef from './UseRef';
import UseRef2 from './UseRef2';
import UseState from './UseState';
import UseState2 from './UseState2';
import UseState3 from './UseState3';

const liStyle = {
  display: 'inline-block',
  padding: '.5rem',
};

const HomeModule3 = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h4>Módulo 3 - React Hooks</h4>
      <ul>
        <li style={liStyle}>
          <Link to={`${match.url}/useState`}>useState</Link>
        </li>
        <li style={liStyle}>
          <Link to={`${match.url}/useEffect`}>useEffect</Link>
        </li>
        <li style={liStyle}>
          <Link to={`${match.url}/useRef`}>useRef</Link>
        </li>
        <li style={liStyle}>
          <Link to={`${match.url}/useMemo`}>useMemo</Link>
        </li>
        <li style={liStyle}>
          <Link to={`${match.url}/useCallback`}>useCallback</Link>
        </li>
        <li style={liStyle}>
          <Link to={`${match.url}/useContext`}>useContext</Link>
        </li>
        <li style={liStyle}>
          <Link to={`${match.url}/customHooks`}>customHooks</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/customHooks`}>
          <h1>customHooks</h1>
          <li>
            Função que vai ter hooks do react dentro, mas vão retornar o que
            você quiser usar
          </li>
          <li>Usar hooks SOMENTE dentro de componentes ou custom hooks</li>
          <li>NÃO usar hooks dentro de funções, condicionais e loops</li>
          <CustomHook />
          <CustomHook2 />
        </Route>
        <Route path={`${match.path}/useContext`}>
          <h1>useContext</h1>
          <li>
            Possibilita a criação de estados e dados globais que todos
            componentes podem ter acesso
          </li>
          <li>
            Deixa todos estados que podem ser reutilizados em um mesmo context
          </li>
          <UseContext />
          <UseContext2 />
        </Route>
        <Route path={`${match.path}/useCallback`}>
          <h1>useCallback</h1>
          <li>
            Evita criar uma função que vai ser renderizada toda vez que executar
            o código
          </li>
          <UseCallback />
        </Route>
        <Route path={`${match.path}/useMemo`}>
          <h1>useMemo</h1>
          <li>
            Memoriza um valor, evitando que ele seja recriado a cada render
          </li>
          <UseMemo />
        </Route>
        <Route path={`${match.path}/useRef`}>
          <h1>useRef</h1>
          <li>Geralmente usado para se referir a algum elemento DOM</li>
          <li>Salva valores que persistem pela vida do elemento</li>
          <li>Não será modificado mesmo que renderize novamente</li>
          <UseRef />
          <li style={{ marginTop: '1rem' }}>
            Não usado somente para elemento DOM, mas qualquer valor inserido no
            código
          </li>
          <UseRef2 />
        </Route>
        <Route path={`${match.path}/useEffect`}>
          <h1>useEffect</h1>
          <li>
            Define qual callback vai ser executado em certos momentos da vida do
            componente
          </li>
          <UseEffect />
          <UseEffect2 />
        </Route>
        <Route path={`${match.path}/useState`}>
          <h1>useState</h1>
          <li>Representa o estado da aplicação naquele momento </li>
          <UseState />
          <UseState2 />
          <UseState3 />
        </Route>
        <Route path={match.path}>
          <h1>Por favor, selecione um tópico</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default HomeModule3;
