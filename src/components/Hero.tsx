import styles from './Hero.module.css';

const Hero = () => {
  return (
    <section className={styles.hero}>
      <div className={styles.container}>
        <h1 className={styles.title}>Neuro27</h1>
        <p className={styles.subtitle}>
          Tecnologia avançada para análise neural e processamento de dados
        </p>
        <button className={styles.ctaButton}>
          Saiba Mais
        </button>
      </div>
    </section>
  );
};

export default Hero;
