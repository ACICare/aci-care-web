import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Brain, LogIn, Home, Book, LibraryBig, Circle } from "lucide-react";
import styles from './Showcase.module.css';



import frameUrl from '/assets/images/screens-showcase/frame.png';
import outsetScreen from '/assets/images/screens-showcase/outset.png';
import loginScreen from '/assets/images/screens-showcase/login.png';
import homeScreen from '/assets/images/screens-showcase/home.png';
import capitulosScreen from '/assets/images/screens-showcase/capitulos.png';
import conteudoScreen from '/assets/images/screens-showcase/conteudo.png';



const Showcase = () => {
  // Estado para controlar qual tab está ativa no showcase
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Estado para controlar a animação de piscada
  const [isFlashing, setIsFlashing] = useState(false);

  // Referência para a seção, usada para detectar quando ela entra na viewport (para animações)
  const sectionRef = useRef(null);
  const isSectionInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Função para trocar de tab com animação de piscada
  const handleTabChange = (index: number) => {
    if (index !== activeIndex) {
      setIsFlashing(true);
      setTimeout(() => {
        setActiveIndex(index);
        setTimeout(() => {
          setIsFlashing(false);
        }, 150);
      }, 150);
    }
  };

  // Definição das tabs com seus ícones, títulos, descrições e imagens correspondentes
  const tabs = [
    { label: <Brain className={styles.icon} />, title: "Outset", description: "Descubra o Neuro27! Crie sua conta ou faça login para começar.", imageSrc: outsetScreen },
    { label: <LogIn className={styles.icon} />, title: "Tela de Login", description: "Acesse sua conta para continuar aprendendo de forma personalizada.", imageSrc: loginScreen },
    { label: <Home className={styles.icon} />, title: "Home", description: "Siga nossa estrutura recomendada e aprenda da forma mais eficiente!", imageSrc: homeScreen },
    { label: <Book className={styles.icon} />, title: "Capítulos", description: "Aprenda capítulo por capítulo, facilitando a compreensão e retenção.", imageSrc: capitulosScreen },
    { label: <LibraryBig className={styles.icon} />, title: "Conteúdo", description: "Explore e estude os conteúdos detalhados de cada capítulo.", imageSrc: conteudoScreen },
  ];

  return (
    <motion.section
      id="showcase"
      ref={sectionRef}
      className={styles.section}
    >
      <div className={styles.containerSecond}>
        {/* Barra lateral de Tabs */}
        <motion.aside
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={isSectionInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={styles.sidebar}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              className={`${styles.tabButton} ${index === activeIndex ? styles.tabButtonActive : styles.tabButtonInactive}`}
              onClick={() => handleTabChange(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {index === activeIndex ? tab.label : <Circle className={styles.circleIcon} />}
            </motion.button>
          ))}
        </motion.aside>

        {/* Showcase com Mockup do Telefone e Conteúdo de Texto */}
        <motion.div
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={isSectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.showcase}
        >
          {/* Mockup do Telefone */}
          <motion.div
            initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
            animate={isSectionInView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -15, scale: 0.9 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className={styles.phoneContainer}
          >
            <div className={`${styles.phoneScreen} ${isFlashing ? styles.flashEffect : ''}`}>
              {tabs[activeIndex].imageSrc ? (
                <img src={tabs[activeIndex].imageSrc} alt={tabs[activeIndex].title} className={styles.phoneImage} />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderText}>{tabs[activeIndex].title}</span>
                </div>
              )}
            </div>
            <img src={frameUrl} alt="Mockup celular" className={styles.phoneFrame} />
          </motion.div>

          {/* Conteúdo de Texto Dinâmico (Título e Descrição) */}
          <AnimatePresence mode="wait">
            <motion.div
              key={activeIndex}
              initial={{ opacity: 0, y: 50, scale: 0.95 }}
              animate={{ opacity: 1, y: 0, scale: 1 }}
              exit={{ opacity: 0, y: -30, scale: 0.95 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              className={styles.textContent}
            >
              <h2 className={styles.title}>
                <span className={styles.titleAccent}>{tabs[activeIndex].title}:</span>
                <br />
                <span className={styles.titleText}>{tabs[activeIndex].description}</span>
              </h2>

              {/* Botão para o Figma */}
              <motion.button
                onClick={() => window.open('https://www.figma.com/design/UtfIs8YdDuaveNGiOGdCU8/Neuro27---Design-de-Telas?node-id=464-105&t=gOrHPwp5FxtqudBe-1', '_blank')}
                className={styles.figmaButton}
              >
                Ver Protótipo no Figma
              </motion.button>
            </motion.div>
          </AnimatePresence>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default Showcase;
