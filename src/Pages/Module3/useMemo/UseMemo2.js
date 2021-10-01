import React from 'react';

function operacaoLenta() {
  let c;
  for (let i = 0; i < 100000000; i++) {
    c = i + i / 10;
  }
  return c;
}

const UseMemo2 = () => {
  const [contar, setContar] = React.useState(0);

  const t1 = performance.now();
  const valor = React.useMemo(() => operacaoLenta(), []);
  console.log(valor);
  console.log(performance.now() - t1);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - Tempo de resposta de operações lentas</h4>
      <button
        onClick={() => setContar(contar + 1)}
        style={{ display: 'block', marginLeft: '3rem' }}
      >
        {contar}
      </button>
      <ul style={{ display: 'inline-block' }}>
        Sem useMemo:
        <li>Primeiro render: 148.6000000089407</li>
        <li>Após (depois de clicar): 106.30000007152557</li>
      </ul>
      <ul style={{ display: 'inline-block' }}>
        Com useMemo:
        <li>Primeiro render: 148.6000000089407 </li>
        <li>Após (depois de clicar): 0.10000002384185791 </li>
      </ul>
    </div>
  );
};

export default UseMemo2;
