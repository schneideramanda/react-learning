import React from 'react';
import UseMemo2 from './UseMemo2';

const UseMemo = () => {
  return (
    <div>
      <h1>useMemo</h1>
      <li>Memoriza um valor, evitando que ele seja recriado a cada render</li>
      <UseMemo2 />
    </div>
  );
};

export default UseMemo;
