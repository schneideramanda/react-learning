import React from 'react';
import UseEffect1 from './UseEffect1';
import UseEffect2 from './UseEffect2';

const UseEffect = () => {
  return (
    <div>
      <h1>useEffect</h1>
      <li>
        Define qual callback vai ser executado em certos momentos da vida do
        componente
      </li>
      <UseEffect1 />
      <UseEffect2 />
    </div>
  );
};

export default UseEffect;
