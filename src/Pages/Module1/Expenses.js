import React from 'react';

const luana = {
  cliente: 'Luana',
  idade: 27,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Celular', preco: 'R$ 1500' },
  ],
  ativa: true,
};

const mario = {
  cliente: 'Mario',
  idade: 31,
  compras: [
    { nome: 'Notebook', preco: 'R$ 2500' },
    { nome: 'Geladeira', preco: 'R$ 3000' },
    { nome: 'Celular', preco: 'R$ 1500' },
    { nome: 'Guitarra', preco: 'R$ 3500' },
  ],
  ativa: false,
};

const produtos = [
  {
    id: 1,
    nome: 'Smartphone',
    preco: 'R$ 2000',
    cores: ['#29d8d5', '#252a34', '#fc3766'],
  },
  {
    id: 2,
    nome: 'Notebook',
    preco: 'R$ 3000',
    cores: ['#ffd045', '#d4394b', '#f37c59'],
  },
  {
    id: 3,
    nome: 'Tablet',
    preco: 'R$ 1500',
    cores: ['#365069', '#47c1c8', '#f95786'],
  },
];

export const Expenses = () => {
  const dados = luana;
  const dados2 = mario;

  const total = dados.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  const total2 = dados2.compras
    .map((item) => Number(item.preco.replace('R$ ', '')))
    .reduce((a, b) => a + b);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        border: '1px solid black',
      }}
    >
      <h4>
        1 - Mostrar os dados de compra de cada usuário e dizer se está acima do
        que poderia gastar
      </h4>
      <div style={{ backgroundColor: '#edbec2', padding: '0.5rem' }}>
        <p>
          <b>Nome:</b> {dados.cliente}
        </p>
        <p>
          <b>Idade:</b> {dados.idade}
        </p>
        {/* Muda cor da situação dependendo se está ativa ou não */}
        <p>
          <b>Situação:</b>{' '}
          <span
            style={{ color: dados.ativa ? 'green' : 'red', fontWeight: 'bold' }}
          >
            {dados.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        <p>
          <b>Total Gasto:</b> <span>R$ {total}</span>
        </p>
        <p>{total > 10000 && 'Você está gastando muito'}</p>
      </div>
      <div
        style={{
          backgroundColor: '#a9e8dc',
          padding: '0.5rem',
          marginTop: '1rem',
        }}
      >
        <p>
          <b>Nome:</b> {dados2.cliente}
        </p>
        <p>
          <b>Idade:</b> {dados2.idade}
        </p>
        <p>
          <b>Situação:</b>{' '}
          <span
            style={{
              color: dados2.ativa ? 'green' : 'red',
              fontWeight: 'bold',
            }}
          >
            {dados2.ativa ? 'Ativa' : 'Inativa'}
          </span>
        </p>
        <p>
          <b>Total Gasto:</b> <span>R$ {total}</span>
        </p>
        <p style={{ color: 'red' }}>
          {total2 > 10000 && 'Você está gastando muito'}
        </p>
      </div>
    </div>
  );
};

export const ListaProdutos = () => {
  /* Filtra os produtos que aparecerem para serem mais caros que 1500 */
  const dados = produtos.filter(
    ({ preco }) => Number(preco.replace('R$ ', '')) > 1500
  );

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4> 2 - Mostrar listagem de produtos </h4>
      {dados.map(({ id, nome, preco, cores }) => (
        <div key={id}>
          <h5>{nome}</h5>
          <p>{preco}</p>
          <ul>
            {cores.map((cor) => (
              <li style={{ backgroundColor: cor, color: 'white' }} key={cor}>
                {cor}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

const Titulo = ({ cor, texto, children }) => {
  return (
    <p style={{ color: cor }}>
      {texto} - {children}
    </p>
  );
};

export const ExemploChildren = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>3 - Exemplo de children de componentes</h4>
      <p>Componente com closing tag e acessando children dentro dele:</p>
      <Titulo texto='Titulo teste' cor='red'>
        Children teste
      </Titulo>
    </div>
  );
};
