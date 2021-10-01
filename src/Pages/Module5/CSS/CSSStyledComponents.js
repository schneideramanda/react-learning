import React from 'react';

const CSSStyledComponents = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>3 - CSS Styled Components</h4>
      <li>Não trabalha com classes, mas sim com componentes</li>
      <li>npm install styled-components</li>
      <li>vscode-styled-components</li>
      <li>import styled from 'styled-components'</li>
      <li>const Titulo = styled.h1 &#96; &#96;</li>
      <li> &lt;Titulo&gt; Estilizado dentro &lt;/Titulo&gt; </li>
      <li>
        Possibilidade de passar propriedades - background: &#36;
        &#123;&#40;&#123; cor &#125;&#41;&#125; =&gt; cor &#125;
      </li>
      <li>Também recebe estados</li>
      <li>&amp;:hover</li>
    </div>
  );
};

export default CSSStyledComponents;
