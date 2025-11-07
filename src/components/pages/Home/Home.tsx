import Banner from '../../Banner/Banner'
import Card from '../../Card/Card'
import Header from '../../Header/Header'
import styles from './Home.module.css'
import { useGames } from '../../../hooks/useGames';
import type { Game } from "../../../types/Game";

export function Home() {
  const { games, loading, error } = useGames();

  if (loading) return <p>Carregando jogos...</p>;
  if (error) return <p>Erro: {error}</p>;

  return (
    <>
      <Header />

      <Banner
        title="O Último Guardião"
        description="Um RPG envolvente com narrativa profunda, escolhas difíceis e exploração em mundo aberto."
        image="/images/hero-banner.png"
        buttonText="Saiba mais"
        onButtonClick={() => console.log("Clicou no banner!")} />

      <main className={styles.content}>
        <h1>Jogos em destaque</h1>

        <section className={styles.grid}>
          {games.map((game: Game) => (
            <Card
              key={game.id}
              href={`/games/${game.id}`}
              src={game.cover && game.cover.trim() !== '' ? game.cover : '/imgs/placeholder.jpg'}
              alt={game.name}
              title={game.name}
              description={game.shortDescription}
              genre={game.genre}
            />
          ))}
        </section>
      </main>

    </>
  )
}

export default Home