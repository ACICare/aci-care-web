import { useRef, useEffect } from "react";
import { motion, useInView } from "framer-motion";
import { ChevronRight } from "lucide-react";
import styles from './Application.module.css';
import { useLocation } from 'react-router-dom';
import Showcase from '../components/Showcase';



const Application = () => {
  const location = useLocation();

  // Efeito para rolar a página para uma seção específica se a navegação vier de um link com estado 'scrollTo'
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]); // Dependência: re-executa quando a localização muda

  // Referência para a primeira seção, usada para detectar quando ela entra na viewport (para animações)
  const firstSectionRef = useRef(null);
  const isFirstSectionInView = useInView(firstSectionRef, { once: true, amount: 0.3 }); // Detecta se 30% da seção está visível

  return (
    <>
      <motion.section
        id="app" // ID para navegação
        ref={firstSectionRef} // Referência para o hook useInView
        className={styles.section}
        style={{ minHeight: "100vh" }} // Garante altura mínima de 100% da viewport
      >
        <div className={styles.container}> {/* Container principal com grid responsivo */}
          <motion.div
            className={styles.textSection} // Seção de texto à esquerda
            initial={{ opacity: 0, x: -100 }} // Animação inicial (escondido à esquerda)
            animate={isFirstSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: -100 }} // Animação quando visível
            transition={{ duration: 0.7, delay: 0.4 }} // Duração e delay da transição (ajustado para 0.7s e 0.4s)
          >
            <h1 className={styles.titleAccent}>Tecnologia inteligente para cuidar da <span>terceira idade </span></h1>
            
            <ul className={styles.list}>
              <li className={styles.item}>
                <ChevronRight className={styles.arrowIcon} />
                Interface intuitiva
              </li>
              <li className={styles.item}>
                <ChevronRight className={styles.arrowIcon} />
                Monitoramento em tempo real
              </li>
              <li className={styles.item}>
                <ChevronRight className={styles.arrowIcon} />
                Detecção de quedas e inatividade
              </li>
              <li className={styles.item}>
                <ChevronRight className={styles.arrowIcon} />
                Botão de emergência (SOS)
              </li>
              <li className={styles.item}>
                <ChevronRight className={styles.arrowIcon} />
                Alertas instantâneos para familiares (SOS)
              </li>
            </ul>
          </motion.div>
          <motion.div
            className={styles.imageSection} // Seção de imagem à direita
            initial={{ opacity: 0, x: 100 }} // Animação inicial (escondido à direita)
            animate={isFirstSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animação quando visível
            transition={{ duration: 0.8, delay: 0.6 }} // Duração e delay da transição (ajustado para 0.8s e 0.6s)
          >
            <img src="/assets/images/telas.png" alt="Telas do aplicativo ACI Care" /> {/* Imagem principal */}
          </motion.div>
        </div>
      </motion.section>

      {/* Segunda Seção: Showcase com Tabs e Mockup de Celular */}
      <Showcase />
    </>
  );
};

export default Application;

