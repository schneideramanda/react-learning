import React from 'react';

const useFetch = () => {
  const [data, setData] = React.useState(null);
  const [error, setError] = React.useState(null);
  const [loading, setLoading] = React.useState(null);

  const request = React.useCallback(async (url, options) => {
    let response;
    let json;

    try {
      setError(null); // Zera o erro
      setLoading(true); // Começa o loading antes do fetch
      response = await fetch(url, options);
      json = await response.json();
    } catch (erro) {
      json = null;
      setError('Erro');
    } finally {
      // Sempre acontece, sendo sucesso ou erro
      setData(json);
      setLoading(false);
      return { response, json };
    }
  }, []);

  // retornando objetos ao inves do array já que são muitos dados
  // e eles precisariam ser descontruidos em ordem caso fosse um array
  // com objetos você pode passar somente o que precisa de informação
  return { data, error, loading, request };
};

export default useFetch;
