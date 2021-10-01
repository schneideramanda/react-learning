import React from 'react';
import { useNavigate, useParams } from 'react-router';
import Head from './Head';
import styles from './Produto.module.css';

const Produto = () => {
  const [produto, setProduto] = React.useState(null);
  const [loading, setLoading] = React.useState(false);
  const [error, setError] = React.useState(null);
  const { id } = useParams();
  const navigate = useNavigate();

  React.useEffect(() => {
    async function fetchProduto(url) {
      try {
        setLoading(true);
        const response = await fetch(url);
        const json = await response.json();
        setProduto(json);
      } catch (erro) {
        setError('Um erro ocorreu');
      } finally {
        setLoading(false);
      }
    }
    fetchProduto(`https://ranekapi.origamid.dev/json/api/produto/${id}`);
  }, [id]);

  function handleClick() {
    navigate('/module6/desafio');
  }

  if (loading) return <div className='loading'></div>;
  if (error) return <p>{error}</p>;
  if (produto === null) return null;
  return (
    <section className={styles.produto + ' desafioAnimeLeft'}>
      <Head
        title={`Desafio 1 | ${produto.nome}`}
        description={`Desafio 1 | ${produto.nome}`}
      />
      <div>
        <img
          key={produto.fotos[0].src}
          src={produto.fotos[0].src}
          alt={produto.fotos[0].titulo}
        />
      </div>
      <div>
        <h1>{produto.nome}</h1>
        <span className={styles.preco}>R$ {produto.preco}</span>
        <p className={styles.descricao}>{produto.descricao}</p>
        <p onClick={handleClick} className={styles.voltar}>
          Voltar
        </p>
      </div>
    </section>
  );
};

export default Produto;
