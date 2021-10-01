import React from 'react';
import Arrays from './Arrays';
import { Helmet } from 'react-helmet';

const HomeModule2 = () => {
  return (
    <div>
      <Helmet>
        <title>React | Módulo 2</title>
        <meta
          name='description'
          content='Essa é a página do módulo 2 do projeto'
        />
      </Helmet>
      <h4>Módulo 2 - Arrays e JSX</h4>
      <Arrays />
    </div>
  );
};

export default HomeModule2;
