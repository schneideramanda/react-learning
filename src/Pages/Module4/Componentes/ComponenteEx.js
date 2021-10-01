import React from 'react';
import ComponenteCheckbox from './ComponenteCheckbox';
import ComponenteInput from './ComponenteInput';
import ComponenteRadio from './ComponenteRadio';
import ComponenteSelect from './ComponenteSelect';

const ComponenteEx = () => {
  const [nome, setNome] = React.useState('');
  const [email, setEmail] = React.useState('');
  const [produto, setProduto] = React.useState('');
  const [cor, setCor] = React.useState('');
  const [linguagens, setLinguagens] = React.useState([]);
  const [termos, setTermos] = React.useState([]);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <form>
        <ComponenteCheckbox
          options={['Javascript', 'CSS', 'HTML']}
          value={linguagens}
          setValue={setLinguagens}
        />
        <p>Cores: </p>
        <ComponenteRadio
          options={['Azul', 'Vermelho']}
          value={cor}
          setValue={setCor}
          required
        />
        <p>Capacidade: </p>
        <ComponenteRadio
          options={['64GB', '128GB']}
          value={cor}
          setValue={setCor}
          required
        />
        <ComponenteSelect
          options={['Smartphone', 'Tablet']}
          value={produto}
          setValue={setProduto}
          required
        />
        <ComponenteInput
          id='nome'
          label='Nome'
          value={nome}
          setValue={setNome}
          required
        />
        <ComponenteInput
          id='email'
          label='Email'
          value={email}
          setValue={setEmail}
        />
        <ComponenteCheckbox
          options={['Aceito os termos de uso']}
          value={termos}
          setValue={setTermos}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ComponenteEx;
