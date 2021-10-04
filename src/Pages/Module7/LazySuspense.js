import React from 'react';

const LazySuspense = () => {
  return (
    <div>
      <h1>Lazy e Suspense</h1>
      <div
        style={{
          backgroundColor: '#ede8e8',
          padding: '0.5rem',
          marginTop: '1rem',
          border: '1px solid black',
        }}
      >
        <h4>1 - Definições</h4>
        <li>
          Podem dividir o código para só carregar quando forem necessárias
        </li>
        <li>
          Lazy - utilizado na importação do componente que será específico
        </li>
        <li>
          const Contato = React.lazy&#40;&#40;&#41; =&gt; import
          &#40;'./Contato'&#41;&#41;
        </li>
        <li>
          Suspense - vai envolver o componente junto com o fallback (mensagem){' '}
        </li>
        <li>
          &lt;React.Suspense
          fallback=&#123;&lt;div&gt;Carregando...&lt;/div&gt;&#125;&gt;
          &lt;Component /&gt; &lt;/React.Suspense&gt;
        </li>
      </div>
    </div>
  );
};

export default LazySuspense;
