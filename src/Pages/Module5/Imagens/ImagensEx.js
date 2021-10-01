import React from 'react';
import foto from '../../../img/foto.jpg';
// import { ReactComponent as Dog } from '../../img/dog.svg';
import DogSvg from './DogSvg';

const ImagensEx = () => {
  const [olho, setOlho] = React.useState(3);

  function handleClick() {
    for (let i = 3; i < 6; i++) {
      setTimeout(() => {
        setOlho(i);
      }, 50 * i);
    }
  }

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - Importações</h4>
      <li>CSS background-image</li>
      <p className='fundo' onClick={handleClick}></p>
      <li>
        import &#123; ReactComponent as Dog &#125; from '../../img/dog.svg'
      </li>
      <li>
        Ou criar um próprio componente com o svg para poder modificar
        (DogSvg.js) deixando passar propriedades
      </li>
      <DogSvg color='#f06b78' olho={olho} />
      <li>
        import foto from '../../img/foto.jpg' - pode também ser feito em svg
      </li>
      <img src={foto} alt='Cachorro' />
    </div>
  );
};

export default ImagensEx;
