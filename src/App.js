import React from 'react';
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';
import {
  Expenses,
  ListaProdutos,
  ExemploChildren,
} from './Pages/Module1/Expenses';
import Home from './Home';
import Arrays from './Pages/Module2/Arrays';
import HomeModule3 from './Pages/Module3/HomeModule3';
import HomeModule4 from './Pages/Module4/HomeModule4';

const liStyle = {
  display: 'inline-block',
  padding: '.5rem',
};

export default function App() {
  return (
    <Router>
      <div style={liStyle}>
        <nav>
          <ul>
            <li style={liStyle}>
              <Link to='/'>Home</Link>
            </li>
            <li style={liStyle}>
              <Link to='/module1'>Módulo 1</Link>
            </li>
            <li style={liStyle}>
              <Link to='/module2'>Módulo 2</Link>
            </li>
            <li style={liStyle}>
              <Link to='/module3'>Módulo 3</Link>
            </li>
            <li style={liStyle}>
              <Link to='/module4'>Módulo 4</Link>
            </li>
          </ul>
        </nav>

        {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
        <Switch>
          <Route path='/module4'>
            <HomeModule4 />
          </Route>

          <Route path='/module3'>
            <HomeModule3 />
          </Route>
          <Route path='/module2'>
            <Arrays />
          </Route>
          <Route path='/module1'>
            <Expenses />
            <ListaProdutos />
            <ExemploChildren />
          </Route>
          <Route path='/'>
            <Home />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}
