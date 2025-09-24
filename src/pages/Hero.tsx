/* src/components/Hero/Hero.tsx */

import styles from './Hero.module.css';

const Hero = () => {
  // Função para rolar suavemente até a seção "about" quando o botão "Saiba Mais" é clicado.
  const scrollToAbout = () => {
    const element = document.getElementById("about"); // Encontra o elemento com o ID "about"
    if (element) {
      // Se o elemento existir, rola a página até ele com um comportamento suave.
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // Seção principal do componente Hero, com ID "home" para navegação.
    <section id="home" className={styles.hero}>
      <div className={styles.wrapper}> {/* Wrapper para controlar a largura máxima e centralizar o conteúdo */}
        <div className={styles.container}> {/* Container para organizar o conteúdo em duas colunas (texto e visual) */}
          <div className={styles.copy}> {/* Seção de texto (cópia) */}
            <h1 className={styles.title}>Neuro27 | Neurociência das Emoções</h1> {/* Título principal */}
            <p className={styles.subtitle}>
              Aplicativo de Educação Neuropsicológica sobre Emoções e Neurotransmissores {/* Subtítulo/descrição */}
            </p>
            <div className={styles.actions}> {/* Container para as ações (botões) */}
              <button onClick={scrollToAbout} className={styles.ctaButton}> {/* Botão de Call to Action */}
                Saiba Mais
              </button>
            </div>
          </div>
          <div className={styles.visual}> {/* Seção visual (imagem/logo) */}
            <img src="/src/assets/images/logo.png" alt="Logo do projeto" className={styles.logo} /> {/* Imagem da logo */}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;

