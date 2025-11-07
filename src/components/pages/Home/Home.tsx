import Banner from '../../Banner/Banner'
import Card from '../../Card/Card'
import Header from '../../Header/Header'
import styles from './Home.module.css'

const Home = () => {
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
            <Card
                href="/games/o-ultimo-guardiao"
                src="/images/hero-banner.png"
                alt="O Último Guardião"
                title="O Último Guardião"
                description="Um RPG envolvente com narrativa profunda, escolhas difíceis e exploração em mundo aberto."
                genre="RPG"
            />
        </main>
    </>
  )
}

export default Home