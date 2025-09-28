import { motion, useInView } from "framer-motion";
import { useRef } from "react";
import styles from './Hero.module.css';

const Hero = () => {
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Função para rolar suavemente até a seção "app" quando o botão "Saiba Mais" é clicado.
  const scrollToApp = () => {
    const element = document.getElementById("app"); // Encontra o elemento com o ID "app"
    if (element) {
      // Se o elemento existir, rola a página até ele com um comportamento suave.
      element.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    // Seção principal do componente Hero, com ID "home" para navegação.
    <motion.section 
      id="home" 
      ref={sectionRef}
      className={styles.hero}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.8 }}
    >
      <div className={styles.wrapper}> {/* Wrapper para controlar a largura máxima e centralizar o conteúdo */}
        <div className={styles.container}> {/* Container para organizar o conteúdo em duas colunas (texto e visual) */}
          <motion.div 
            className={styles.copy} 
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
            transition={{ duration: 0.8, delay: 0.2 }}
          > {/* Seção de texto (cópia) */}
            <motion.h1 
              className={styles.title}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.4 }}
            >Neuro27 | Neurociência das Emoções</motion.h1> {/* Título principal */}
            <motion.p 
              className={styles.subtitle}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.6 }}
            >
              Tornando a educação emocional acessível, prática e envolvente.{/* Subtítulo/descrição */}
            </motion.p>
            <motion.div 
              className={styles.actions}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : { opacity: 0, y: 30 }}
              transition={{ duration: 0.8, delay: 0.8 }}
            > {/* Container para as ações (botões) */}
              <button onClick={scrollToApp} className={styles.ctaButton}> {/* Botão de Call to Action */}
                Saiba Mais
              </button>
            </motion.div>
          </motion.div>
          <motion.div 
            className={styles.visual}
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 50 }}
            transition={{ duration: 0.8, delay: 0.4 }}
          > {/* Seção visual (imagem/logo) */}
            <motion.img 
              src="/assets/images/logo.png" 
              alt="Logo do projeto" 
              className={styles.logo}
              initial={{ scale: 0.8, opacity: 0 }}
              animate={isInView ? { scale: 1, opacity: 1 } : { scale: 0.8, opacity: 0 }}
              transition={{ duration: 1, delay: 0.6 }}
            /> {/* Imagem da logo */}
          </motion.div>
        </div>
      </div>
    </motion.section>
  );
};

export default Hero;

