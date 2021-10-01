import React from 'react';

const ComponenteRadio = ({ options, value, setValue, ...props }) => {
  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type='radio'
            value={option}
            checked={value === option}
            onChange={({ target }) => setValue(target.value)}
            style={{ display: 'inline-block' }}
            {...props}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default ComponenteRadio;
