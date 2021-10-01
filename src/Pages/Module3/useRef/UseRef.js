import React from 'react';
import UseRef1 from './UseRef1';
import UseRef2 from './UseRef2';

const UseRef = () => {
  return (
    <div>
      <h1>useRef</h1>
      <li>Geralmente usado para se referir a algum elemento DOM</li>
      <li>Salva valores que persistem pela vida do elemento</li>
      <li>Não será modificado mesmo que renderize novamente</li>
      <UseRef1 />
      <li style={{ marginTop: '1rem' }}>
        Não usado somente para elemento DOM, mas qualquer valor inserido no
        código
      </li>
      <UseRef2 />
    </div>
  );
};

export default UseRef;
