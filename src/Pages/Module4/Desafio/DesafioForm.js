import React from 'react';

const DesafioForm = ({ pergunta, options, id, value, onChange, active }) => {
  if (active === false) return null;

  return (
    <fieldset style={{ padding: '2rem', backgroundColor: '#faf7f7' }}>
      <legend style={{ fontWeight: 'bold' }}>{pergunta}</legend>
      {options.map((option) => (
        <label key={option}>
          <input
            style={{ margin: '1rem' }}
            type='radio'
            id={id}
            checked={value === option}
            value={option}
            onChange={onChange}
          />
          {option}
        </label>
      ))}
    </fieldset>
  );
};

export default DesafioForm;
