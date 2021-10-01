import React from 'react';

const ComponenteCheckbox = ({ options, value, setValue }) => {
  function handleChange({ target }) {
    if (target.checked) {
      setValue([...value, target.value]);
    } else {
      setValue(value.filter((itemValue) => itemValue !== target.value));
    }
  }

  return (
    <div>
      {options.map((option) => (
        <label key={option}>
          <input
            type='checkbox'
            value={option}
            checked={value.includes(option)}
            onChange={handleChange}
          />
          {option}
        </label>
      ))}
    </div>
  );
};

export default ComponenteCheckbox;
