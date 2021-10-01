import React from 'react';
import useFetch from './useFetch';

const CustomHook2 = () => {
  const { request, data, error, loading } = useFetch();

  React.useEffect(() => {
    async function fetchData() {
      const { response, json } = await request(
        'https://ranekapi.origamid.dev/json/api/produto/'
      );
      console.log(response, json);
    }
    fetchData();
  }, [request]);

  if (error) return <p>{error}</p>;
  if (loading) return <p>Carregando...</p>;
  if (data)
    return (
      <div
        style={{
          backgroundColor: '#ede8e8',
          padding: '0.5rem',
          marginTop: '1rem',
          border: '1px solid black',
        }}
      >
        <h4>2 - Fetch info (+ carregar e erro)</h4>
        {data.map((produto) => (
          <p key={produto.id}>{produto.nome}</p>
        ))}
      </div>
    );
  else return null;
};

export default CustomHook2;
