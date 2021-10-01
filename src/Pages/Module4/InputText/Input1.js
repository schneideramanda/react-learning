import React from 'react';

export const Input1 = () => {
  // estado sempre ligado ao value
  // função atualizadora sempre ligada ao onChange
  // const [nome, setNome] = React.useState('');
  // const [email, setEmail] = React.useState('');
  const [form, setForm] = React.useState({
    nome: '',
    email: '',
  });

  function handleSubmit(event) {
    event.preventDefault(); // faz a página não atualizar
  }

  function handleChange({ target }) {
    const { id, value } = target;
    // [id] para acessar
    setForm({ ...form, [id]: value });
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
      <h4> 1 - Reatividade e valores em vários campos </h4>
      <form onSubmit={handleSubmit}>
        <label htmlFor='1-nome'>Nome</label>
        <input
          id='1-nome'
          type='text'
          value={form.nome}
          onChange={handleChange}
        />
        <p style={{ fontSize: '.8rem' }}>{form.nome}</p>
        <label htmlFor='1-email'>Email</label>
        <input
          id='1-email'
          type='email'
          value={form.email}
          onChange={handleChange}
        />
        <p style={{ fontSize: '.8rem' }}>{form.email}</p>
        <button>Enviar</button>
      </form>
    </div>
  );
};
