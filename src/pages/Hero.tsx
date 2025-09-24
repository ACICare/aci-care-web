import styles from './Hero.module.css';

const Hero = () => {
  const scrollToAbout = () => {
    const element = document.getElementById("about");
    if (element) {
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <section id="home" className={styles.hero}>
      <div className={styles.wrapper}>
        <div className={styles.container}>
          <div className={styles.copy}>
            <h1 className={styles.title}>Neuro27 | Neurociência das Emoções</h1>
            <p className={styles.subtitle}>
              Aplicativo de Educação Neuropsicológica sobre Emoções e Neurotransmissores
            </p>
            <div className={styles.actions}>
              <button onClick={scrollToAbout} className={styles.ctaButton}>
                Saiba Mais
              </button>
            </div>
          </div>
          <div className={styles.visual}>
            <img src="/src/assets/images/logo.png" alt="Logo do projeto" className={styles.logo} />
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
