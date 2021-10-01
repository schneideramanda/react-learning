import React from 'react';

export const CheckboxUnico = () => {
  const [termos, setTermos] = React.useState(false);

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>1 - Checkbox único</h4>
      <form>
        <label>
          <input
            type='checkbox'
            value='Termos'
            checked={termos}
            onChange={({ target }) => setTermos(target.checked)}
          />
          Aceito os termos
        </label>
        {termos && <p>O usuário aceitou os termos</p>}
      </form>
    </div>
  );
};

export const CheckboxMultiplo = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>2 - Checkbox Múltiplo</h4>
      <li>Adiciona no array e filtra quando desmarcado</li>
      <form>
        <label>
          <input
            type='checkbox'
            value='azul'
            checked={checkColor('azul')}
            onChange={handleChange}
          />
          Azul
        </label>
        <label>
          <input
            type='checkbox'
            value='vermelho'
            checked={checkColor('vermelho')}
            onChange={handleChange}
          />
          Vermelho
        </label>
      </form>
    </div>
  );
};

const coresArray = [
  'azul',
  'azul',
  'roxo',
  'laranja',
  'verde',
  'vermelho',
  'cinza',
];

export const CheckboxOtimizado = () => {
  const [cores, setCores] = React.useState([]);

  function handleChange({ target }) {
    if (target.checked) {
      setCores([...cores, target.value]);
    } else {
      setCores(cores.filter((cor) => cor !== target.value));
    }
  }

  function checkColor(cor) {
    return cores.includes(cor);
  }

  return (
    <div
      style={{
        backgroundColor: '#ede8e8',
        padding: '0.5rem',
        marginTop: '1rem',
        border: '1px solid black',
      }}
    >
      <h4>3 - Otimização do uso de inputs e labels</h4>
      <li>'cor + index' para separar as propriedades dos azuis</li>
      <form>
        {coresArray.map((cor, index) => (
          <label key={index} style={{ textTransform: 'capitalize' }}>
            <input
              type='checkbox'
              value={cor + index}
              checked={checkColor(cor + index)}
              onChange={handleChange}
            />
            {cor}
          </label>
        ))}
      </form>
    </div>
  );
};
