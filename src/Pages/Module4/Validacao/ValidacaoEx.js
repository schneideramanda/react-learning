import React from 'react';
import Input from './Input';
import useForm from './useForm';

const ValidacaoEx = () => {
  const cep = useForm('cep');
  const email = useForm('email');
  const nome = useForm();
  const sobrenome = useForm(false);

  function handleSubmit(event) {
    event.preventDefault();
    if (cep.validate() && email.validate() && nome.validate()) {
      console.log('Enviar');
    } else {
      console.log('Não enviar');
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
      <h4>1 - Validação com Hook</h4>
      <form onSubmit={handleSubmit}>
        <Input type='text' label='Nome' id='nome' {...nome} />
        <Input type='text' label='Sobrenome' id='sobrenome' {...sobrenome} />
        <Input type='email' label='Email' id='email' {...email} />
        <Input
          type='text'
          label='CEP'
          id='cep'
          placeholder='00000-000'
          {...cep}
        />
        <button>Enviar</button>
      </form>
    </div>
  );
};

export default ValidacaoEx;
