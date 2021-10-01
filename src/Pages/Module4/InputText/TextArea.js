import React from 'react';

const TextArea = () => {
  const [textarea, setTextarea] = React.useState('');

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>3 - TextArea</h4>
      <li>Possui os mesmos princípios do input</li>
      <li>Somente adiciona a propriedade de rows e cols</li>
      <form>
        <textarea
          name=''
          id=''
          cols='20'
          rows='10'
          value={textarea}
          onChange={({ target }) => setTextarea(target.value)}
        ></textarea>
        {textarea}
      </form>
    </div>
  );
};

export default TextArea;
