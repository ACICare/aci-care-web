import { useState, useRef, useEffect } from "react";
import { motion, AnimatePresence, useInView } from "framer-motion";
import { Brain, LogIn, Home, Book, LibraryBig, Circle } from "lucide-react";
import styles from './About.module.css';
import frameUrl from '/assets/images/frame.png'; // Caminho para a imagem do frame do celular
import { useLocation } from 'react-router-dom';

const About = () => {
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

  // Estado para controlar qual tab está ativa no showcase
  const [activeIndex, setActiveIndex] = useState(0);

  // Referência para a primeira seção, usada para detectar quando ela entra na viewport (para animações)
  const firstSectionRef = useRef(null);
  const isFirstSectionInView = useInView(firstSectionRef, { once: true, amount: 0.3 }); // Detecta se 30% da seção está visível

  // Referência para a segunda seção, usada para detectar quando ela entra na viewport (para animações)
  const secondSectionRef = useRef(null);
  const isSecondSectionInView = useInView(secondSectionRef, { once: true, amount: 0.3 }); // Detecta se 30% da seção está visível

  // Definição das tabs com seus ícones, títulos, descrições e imagens correspondentes
  const tabs = [
    { label: <Brain className={styles.icon} />, title: "Outset", description: "Descubra o Neuro27! Crie sua conta ou faça login para começar.", imageSrc: "/assets/images/outset.png" },
    { label: <LogIn className={styles.icon} />, title: "Tela de Login", description: "Acesse sua conta para continuar aprendendo de forma personalizada.", imageSrc: "/assets/images/login.png" },
    { label: <Home className={styles.icon} />, title: "Home", description: "Siga nossa estrutura recomendada e aprenda da forma mais eficiente!", imageSrc: "/assets/images/#.png" },
    { label: <Book className={styles.icon} />, title: "Capítulos", description: "Aprenda capítulo por capítulo, facilitando a compreensão e retenção.", imageSrc: "/assets/images/#.png" },
    { label: <LibraryBig className={styles.icon} />, title: "Conteúdo", description: "Explore e estude os conteúdos detalhados de cada capítulo.", imageSrc: "/assets/images/#.png" },

  ];

  return (
    <>
      {/* Primeira Seção: Introdução (Um jeito novo de aprender neurociência) */}
      <motion.section
        id="about" // ID para navegação
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
            <h1>Um jeito novo de aprender neurociência</h1>
            <ul className={styles.list}>
              <li>Interface intuitiva</li>
              <li>Mapa interativo do cérebro</li>
              <li>Conteúdo dinâmico</li>
              <li>Aprendizado gamificado</li>
              <li>Design agradável</li>
            </ul>
          </motion.div>
          <motion.div
            className={styles.imageSection} // Seção de imagem à direita
            initial={{ opacity: 0, x: 100 }} // Animação inicial (escondido à direita)
            animate={isFirstSectionInView ? { opacity: 1, x: 0 } : { opacity: 0, x: 100 }} // Animação quando visível
            transition={{ duration: 0.8, delay: 0.6 }} // Duração e delay da transição (ajustado para 0.8s e 0.6s)
          >
            <img src="/assets/images/Telas.png" alt="Telas do aplicativo Neuro27" /> {/* Imagem principal */}
          </motion.div>
        </div>
      </motion.section>

      {/* Segunda Seção: Showcase com Tabs e Mockup de Celular */}
      <motion.section
        id="showcase" // ID para navegação (alterado para ser único, se 'about' já estiver em uso)
        ref={secondSectionRef} // Referência para o hook useInView
        className={styles.section}
      >
        <div className={styles.containerSecond}> {/* Container principal com flexbox responsivo */}
          {/* Barra lateral de Tabs */}
          <motion.aside
            initial={{ opacity: 0, x: -100, scale: 0.8 }} // Animação inicial (escondido à esquerda, menor)
            animate={isSecondSectionInView ? { opacity: 1, x: 0, scale: 1 } : { opacity: 0, x: -100, scale: 0.8 }} // Animação quando visível
            transition={{ duration: 0.7, delay: 0.4 }} // Duração e delay da transição
            className={styles.sidebar}
          >
            {tabs.map((tab, index) => (
              <motion.button
                key={index}
                className={`${styles.tabButton} ${index === activeIndex ? styles.tabButtonActive : styles.tabButtonInactive}`} // Classes dinâmicas
                onClick={() => setActiveIndex(index)} // Atualiza o estado da tab ativa
                whileHover={{ scale: 1.1 }} // Efeito de escala ao passar o mouse
                whileTap={{ scale: 0.95 }} // Efeito de escala ao clicar
              >
                {index === activeIndex ? tab.label : <Circle className={styles.circleIcon} />} {/* Mostra ícone ou círculo dependendo do estado */}
              </motion.button>
            ))}
          </motion.aside>

          {/* Showcase com Mockup do Telefone e Conteúdo de Texto */}
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }} // Animação inicial (escondido abaixo, menor)
            animate={isSecondSectionInView ? { opacity: 1, y: 0, scale: 1 } : { opacity: 0, y: 100, scale: 0.8 }} // Animação quando visível
            transition={{ duration: 0.8, delay: 0.6 }} // Duração e delay da transição
            className={styles.showcase}
          >
            {/* Mockup do Telefone */}
            <motion.div
              initial={{ opacity: 0, rotateY: -15, scale: 0.9 }} // Animação inicial (rotacionado, menor)
              animate={isSecondSectionInView ? { opacity: 1, rotateY: 0, scale: 1 } : { opacity: 0, rotateY: -15, scale: 0.9 }} // Animação quando visível
              transition={{ duration: 0.9, delay: 0.8 }} // Duração e delay da transição
              className={styles.phoneContainer}
            >
              <div className={styles.phoneScreen}> {/* Tela onde a imagem do app é exibida */}
                {tabs[activeIndex].imageSrc ? (
                  <img src={tabs[activeIndex].imageSrc} alt={tabs[activeIndex].title} className={styles.phoneImage} />
                ) : (
                  <div className={styles.placeholder}> {/* Placeholder se não houver imagem */}
                    <span className={styles.placeholderText}>{tabs[activeIndex].title}</span>
                  </div>
                )}
              </div>
              <img src={frameUrl} alt="Mockup celular" className={styles.phoneFrame} /> {/* Imagem do frame do celular */}
            </motion.div>

            {/* Conteúdo de Texto Dinâmico (Título e Descrição) */}
            <AnimatePresence mode="wait"> {/* Garante que apenas um elemento seja renderizado por vez com animação */}
              <motion.div
                key={activeIndex} // Key para animar a saída e entrada de diferentes conteúdos
                initial={{ opacity: 0, y: 50, scale: 0.95 }} // Animação inicial
                animate={{ opacity: 1, y: 0, scale: 1 }} // Animação de entrada
                exit={{ opacity: 0, y: -30, scale: 0.95 }} // Animação de saída
                transition={{ duration: 0.5, ease: "easeOut" }} // Duração e easing da transição
                className={styles.textContent}
              >
                <h2 className={styles.title}>
                  <span className={styles.titleAccent}>{tabs[activeIndex].title}:</span> {/* Título da tab ativa */}
                  <br />
                  <span className={styles.titleText}>{tabs[activeIndex].description}</span> {/* Descrição da tab ativa */}
                </h2>

                {/* Botão para o Figma */}
                <motion.button
                  onClick={() => window.open('https://www.figma.com/design/UtfIs8YdDuaveNGiOGdCU8/Neuro27---Design-de-Telas?node-id=464-105&t=gOrHPwp5FxtqudBe-1', '_blank')} // Abre link do Figma em nova aba
                  className={styles.figmaButton}
                  whileHover={{ scale: 1.05 }} // Efeito de escala ao passar o mouse
                  whileTap={{ scale: 0.95 }} // Efeito de escala ao clicar
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

