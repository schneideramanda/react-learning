import React from 'react';
import { Switch, Route, Link, useRouteMatch } from 'react-router-dom';
import { Input } from './Input';
import Input2 from './Input2';

const liStyle = {
  display: 'inline-block',
  padding: '.5rem',
};

const HomeModule4 = () => {
  let match = useRouteMatch();

  return (
    <div>
      <h4>Módulo 4 - Formulários</h4>
      <ul>
        <li style={liStyle}>
          <Link to={`${match.path}/input`}>Input</Link>
        </li>
      </ul>

      <Switch>
        <Route path={`${match.path}/input`}>
          <h1>Input</h1>
          <li>Estado sempre ligado ao 'value'</li>
          <li>Função atualizadora sempre ligada ao 'onChange'</li>
          <Input />
          <Input2 />
        </Route>
        <Route path={match.path}>
          <h1>Por favor, selecione um tópico</h1>
        </Route>
      </Switch>
    </div>
  );
};

export default HomeModule4;
