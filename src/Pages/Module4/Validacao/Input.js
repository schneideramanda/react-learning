import React from 'react';

const ComponenteInput = ({
  label,
  id,
  onChange,
  value,
  type,
  onBlur,
  placeholder,
  error,
}) => {
  // pode passar ...props quando o valor é o mesmo que o nome da key
  // exemplo 'value = {value}' / 'required = {required}'
  return (
    <div>
      <label htmlFor={id}>{label}</label>
      <input
        id={id}
        name={id}
        onChange={onChange}
        placeholder={placeholder}
        onBlur={onBlur}
        type={type}
        value={value}
      />
      {error && <p style={{ color: 'red' }}>{error}</p>}
    </div>
  );
};

export default ComponenteInput;
