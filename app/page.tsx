import Banner from "./components/banner";
import styles from "./page.module.css";

export default function Home() {
  return (
    <main>
      <h1 className={styles.titulo}>Adote um gatinho!</h1>
      <section className={styles.main}>
        <Banner
          url="/images/branco.png"
          name="Reginaldo"
          description="gato branco"
          breed="Persa da Pérsia"
          age="2 anos"
          text="Reginaldo é um gatinho super carinhoso e tranquilo. Ele adora passar o dia relaxando em um lugar confortável e vai te acompanhar em todos os momentos, sempre pronto para receber carinho."
        />
        <Banner
          url="/images/calico.png"
          name="Tom"
          description="gato cálico"
          breed="Chita"
          age="1 ano"
          text="Tom é um gato independente, mas também valoriza seus momentos de carinho. Ele é muito adaptável e se dá bem com todos, sendo um ótimo companheiro tanto para famílias quanto para lares mais tranquilos."
        />
        <Banner
          url="/images/cinza.png"
          name="Luna"
          description="gato cálico"
          breed="Gato de pelo curto inglês"
          age="4 anos"
          text="Luna é cheia de energia e curiosidade! Ela está sempre em movimento, explorando o ambiente e brincando com qualquer coisa que encontrar. Um lar com muita atenção e diversão é ideal para essa gatinha ativa."
        />
        <Banner
          url="/images/marrom.png"
          name="Mia"
          description="gato marrom"
          breed="LaPerm"
          age="1 ano"
          text="Mia é uma gatinha muito afetuosa e adora estar perto das pessoas. Ela é perfeita para quem busca uma companhia amorosa, sempre pronta para dar e receber carinho."
        />
        <Banner
          url="/images/laranja.png"
          name="Felix"
          description="gato laranja"
          breed="Bobtail Americano"
          age="1 ano"
          text="Felix é um gatinho muito brincalhão e curioso. Ele ama aventuras e está sempre à procura de novos jogos e interações. Se você procura um gatinho que vai encher sua casa de alegria, Felix é o companheiro certo"
        />
      </section>
    </main>
  );
}
