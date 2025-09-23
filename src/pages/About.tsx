import { useState, useRef } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Brain, LogIn, Home, Book, Settings, Bot, Circle } from "lucide-react";
import styles from './About.module.css';
import frameUrl from '/assets/images/frame.png';

const About = () => {
  const [activeIndex, setActiveIndex] = useState(0);
  
  // Ref para detectar quando a seção está visível
  const sectionRef = useRef(null);
  const isInView = useInView(sectionRef, { once: true, amount: 0.3 });

  // Dados das tabs com caminho de imagens (substitua pelos seus arquivos em public/assets/images)
  const tabs = [
    {
      label: <Brain className={styles.icon} />,
      title: "Outset",
      description: "Conheça o Neuro27, crie sua conta ou faça login!",
      imageSrc: "/src/assets/images/outset.png",
    },
    {
      label: <LogIn className={styles.icon} />,
      title: "Tela de Login",
      description: "Logue em sua conta para começar a aprender.",
      imageSrc: "/src/assets/images/login.png",
    },
    {
      label: <Home className={styles.icon} />,
      title: "Home",
      description: "Aprenda da melhor maneira seguindo a nossa estrutura recomendada!",
      imageSrc: "/src/assets/images/home.png",
    },
    {
      label: <Book className={styles.icon} />,
      title: "Capítulos",
      description: "Visualize relatórios detalhados sobre o uso do app.",
      imageSrc: "/assets/images/about-reports.jpg",
    },
    {
      label: <Settings className={styles.icon} />,
      title: "Configurações",
      description: "Personalize o app de acordo com suas preferências.",
      imageSrc: "/assets/images/about-settings.jpg",
    },
    {
      label: <Bot className={styles.icon} />,
      title: "Chatbot",
      description: "Converse com o assistente virtual para suporte rápido.",
      imageSrc: "/assets/images/about-chatbot.jpg",
    },
  ];

  return (
    <motion.section 
      id="about"
      ref={sectionRef}
      className={styles.section}
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
    >
      
      <div className={styles.container}>
        {/* Barra lateral de tabs - Responsiva */}
        <motion.aside 
          initial={{ opacity: 0, x: -100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }}
          transition={{ duration: 0.7, delay: 0.4 }}
          className={styles.sidebar}
        >
          {tabs.map((tab, index) => (
            <motion.button
              key={index}
              className={`${styles.tabButton} ${
                index === activeIndex 
                  ? styles.tabButtonActive
                  : styles.tabButtonInactive
              }`}
              onClick={() => setActiveIndex(index)}
              whileHover={{ scale: 1.1 }}
              whileTap={{ scale: 0.95 }}
            >
              {index === activeIndex ? tab.label : <Circle className={styles.circleIcon} />}
            </motion.button>
          ))}
        </motion.aside>

        {/* Showcase com mockup - Responsivo */}
        <motion.div 
          initial={{ opacity: 0, y: 100, scale: 0.8 }}
          animate={isInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }}
          transition={{ duration: 0.8, delay: 0.6 }}
          className={styles.showcase}
        >
          {/* Mockup do Celular - Responsivo */}
          <motion.div 
            initial={{ opacity: 0, rotateY: -15, scale: 0.9 }}
            animate={isInView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -15, scale: 0.9 }}
            transition={{ duration: 0.9, delay: 0.8 }}
            className={styles.phoneContainer}
          >
            {/* Área para imagem do app */}
            <div className={styles.phoneScreen}>
              {tabs[activeIndex].imageSrc ? (
                <img
                  src={tabs[activeIndex].imageSrc}
                  alt={tabs[activeIndex].title}
                  className={styles.phoneImage}
                />
              ) : (
                <div className={styles.placeholder}>
                  <span className={styles.placeholderText}>{tabs[activeIndex].title}</span>
                </div>
              )}
            </div>

            {/* Frame do celular */}
            <img 
              src={frameUrl}
              alt="Mockup celular" 
              className={styles.phoneFrame}
            />
          </motion.div>

          {/* Texto de apoio - Responsivo */}
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
                <span className={styles.titleAccent}>
                  {tabs[activeIndex].title}:
                </span>
                <br />
                <span className={styles.titleText}>
                  {tabs[activeIndex].description}
                </span>
              </h2>
              
              {/* Botão para Figma */}
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
  );
};

export default About;
