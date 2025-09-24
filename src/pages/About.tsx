import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Brain, LogIn, Home, Book, Settings, Bot, Circle } from "lucide-react";
import styles from './About.module.css';
import frameUrl from '/assets/images/frame.png';
import { useLocation } from 'react-router-dom';

const About = () => {
  const location = useLocation();

  // Scroll quando vem do Header de outra página
  useEffect(() => {
    if (location.state?.scrollTo) {
      const element = document.getElementById(location.state.scrollTo);
      if (element) {
        element.scrollIntoView({ behavior: "smooth", block: "start" });
      }
    }
  }, [location]);

  const [activeIndex, setActiveIndex] = useState(0);

  const sectionRef1 = useRef(null);
  const isInView1 = useInView(sectionRef1, { once: true, amount: 0.3 });

  const tabs = [
    { label: <Brain className={styles.icon} />, title: "Outset", description: "Conheça o Neuro27, crie sua conta ou faça login!", imageSrc: "/src/assets/images/outset.png" },
    { label: <LogIn className={styles.icon} />, title: "Tela de Login", description: "Logue em sua conta para começar a aprender.", imageSrc: "/src/assets/images/login.png" },
    { label: <Home className={styles.icon} />, title: "Home", description: "Aprenda da melhor maneira seguindo a nossa estrutura recomendada!", imageSrc: "/src/assets/images/home.png" },
    { label: <Book className={styles.icon} />, title: "Capítulos", description: "Visualize relatórios detalhados sobre o uso do app.", imageSrc: "/src/assets/images/about-reports.jpg" },
    { label: <Settings className={styles.icon} />, title: "Configurações", description: "Personalize o app de acordo com suas preferências.", imageSrc: "/src/assets/images/about-settings.jpg" },
    { label: <Bot className={styles.icon} />, title: "Chatbot", description: "Converse com o assistente virtual para suporte rápido.", imageSrc: "/src/assets/images/about-chatbot.jpg" },
  ];

  return (
    <>
      {/* Seção vazia de 100vh */}
      <motion.section
        id="top-section"
        className={styles.section}
        style={{ minHeight: "100vh" }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        {/* Você pode adicionar elementos aqui depois */}
      </motion.section>

      {/* Seção principal com tabs */}
      <motion.section
        id="about"
        ref={sectionRef1}
        className={styles.section}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 0.5 }}
      >
        <div className={styles.container}>
          {/* Barra lateral de tabs */}
          <motion.aside
            initial={{ opacity: 0, x: -100, scale: 0.8 }}
            animate={isInView1 ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
            transition={{ duration: 0.7, delay: 0.4 }}
            className={styles.sidebar}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                className={`${styles.tabButton} ${index === activeIndex ? styles.tabButtonActive : styles.tabButtonInactive}`}
                onClick={() => setActiveIndex(index)}
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {index === activeIndex ? tab.label : <Circle className={styles.circleIcon} />}
              </motion.button>
            ))}
          </motion.aside>

          {/* Showcase com mockup */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={isInView1 ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.8, delay: 0.6 }}
            className={styles.showcase}
          >
            <motion.div
              initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
              animate={isInView1 ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -15, scale: 0.9 }}
              transition={{ duration: 0.9, delay: 0.8 }}
              className={styles.phoneContainer}
            >
              <div className={styles.phoneScreen}>
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

                <motion.button
                  onClick={() => window.open('https://www.figma.com/design/Jbgm1ifwh7qi16D9795VnK/Vion-%7C-Error-504?node-id=2001-501&t=6R9IGAyXVvrtssgC-1', '_blank')}
                  className={styles.figmaButton}
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  Ver Protótipo no Figma
                </motion.button>
              </motion.div>
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>
    </>
  );
};

export default About;
