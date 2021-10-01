import React from 'react';

const CSSFrameworks = () => {
  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>4 - CSS Frameworks</h4>
      <li>Adicionar libs de CSS ao React</li>
      <li>npm install bootstrap@next</li>
      <li>
        import files from node_modules - import
        'bootstrap/dist/css/bootstrap.min.css'
      </li>
      <ul>
        react-bootstrap:
        <li>import Card from 'react-bootstrap/Card'</li>
        <li>Estilos passados como propriedades</li>
        <li>
          &lt;Card text='white'&gt; &lt;Card.Header&gt; &lt;/Card.Header&gt;
          &lt;/Card&gt;
        </li>
      </ul>
    </div>
  );
};

export default CSSFrameworks;
