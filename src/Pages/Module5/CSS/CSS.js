import React from 'react';
import CSSImport from './CSSImport';
import CSSModules from './CSSModules';
import CSSFrameworks from './CSSFrameworks';
import CSSStyledComponents from './CSSStyledComponents';

const CSS = () => {
  return (
    <div>
      <h1>Imports</h1>
      <li>Maneiras de usar CSS dentro do React</li>
      <CSSImport />
      <CSSModules />
      <CSSStyledComponents />
      <CSSFrameworks />
    </div>
  );
};

export default CSS;
