import React from 'react';

const ComponenteInput = ({ label, id, setValue, ...props }) => {
  // pode passar ...props quando o valor é o mesmo que o nome da key
  // exemplo 'value = {value}' / 'required = {required}'
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        type='text'
        id={id}
        name={id}
        onChange={({ target }) => setValue(target.value)}
        {...props}
      />
    </div>
  );
};

export default ComponenteInput;
