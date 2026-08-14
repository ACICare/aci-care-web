import { motion, useInView } from "framer-motion";
import { useRef, useEffect, useState } from "react";
import { Instagram, Github } from "lucide-react";
import styles from './About.module.css';

const About = () => {
  const sectionRef = useRef(null);
  const [isLoaded, setIsLoaded] = useState(false);
  
  // Ajusta a detecção de viewport para mobile - reduz o threshold para 0.1 (10%)
  const isInView = useInView(sectionRef, { once: true, amount: 0.1 });
  
  // Detecta se é um dispositivo móvel
  const isMobile = window.innerWidth <= 768;

  // Garante que o scroll seja mantido durante as animações
  useEffect(() => {
    // Marca como carregado imediatamente no mobile
    if (isMobile) {
      setIsLoaded(true);
    }
    
    const checkScroll = () => {
      const bodyHeight = document.body.scrollHeight;
      const windowHeight = window.innerHeight;
      
      // Se o conteúdo é maior que a janela, garante que o scroll esteja disponível
      if (bodyHeight > windowHeight) {
        document.documentElement.style.overflowY = 'auto';
        document.body.style.overflowY = 'auto';
      }
    };

    // Verifica o scroll após um pequeno delay para permitir que as animações se estabilizem
    const timeoutId = setTimeout(() => {
      checkScroll();
      setIsLoaded(true);
    }, 100);
    
    // Também verifica quando a animação termina
    const observer = new MutationObserver(checkScroll);
    observer.observe(document.body, { childList: true, subtree: true });
    
    return () => {
      clearTimeout(timeoutId);
      observer.disconnect();
      // Limpa as configurações quando o componente é desmontado
      document.documentElement.style.overflowY = '';
      document.body.style.overflowY = '';
    };
  }, [isMobile]);

  return (
    <motion.section
      id="about"
      ref={sectionRef}
      className={styles.aboutSection}
      style={{ minHeight: "100vh" }}
    >
      <div className={styles.container}>
        <motion.div
          className={styles.content}
          initial={isMobile || isLoaded ? { opacity: 1, y: 0 } : { opacity: 0, y: 50 }}
          animate={isMobile || isLoaded ? { opacity: 1, y: 0 } : (isInView ? { opacity: 1, y: 0 } : { opacity: 1, y: 0 })}
          transition={isMobile || isLoaded ? { duration: 0 } : { duration: 0.8, delay: 0.2 }}
        >
          <div className={styles.layout}>
            <div className={styles.imageSection}>
              <motion.div
                className={styles.imageGrid}
                initial={isMobile || isLoaded ? { opacity: 1, x: 0 } : { opacity: 0, x: -50 }}
                animate={isMobile || isLoaded ? { opacity: 1, x: 0 } : (isInView ? { opacity: 1, x: 0 } : { opacity: 1, x: 0 })}
                transition={isMobile || isLoaded ? { duration: 0 } : { duration: 0.8, delay: 0.4 }}
              >
                <div className={styles.mainImage}>
                  <img 
                    src="/assets/images/grupo.jpeg"
                    alt="Grupo do projeto" 
                    className={styles.projectImage}
                  />
                </div>
                <div className={styles.secondaryImages}>
                  <img 
                    src="/assets/images/grupo2.jpeg" 
                    alt="Atividade realizadas" 
                    className={styles.secondaryImage}
                  />
                  <img 
                    src="/assets/images/juntos.jpeg" 
                    alt="Atividades realizada" 
                    className={styles.secondaryImage}
                  />
                </div>
              </motion.div>
            </div>
            
            <div className={styles.textSection}>
              <h1 className={styles.title}>Sobre</h1>
          
              <div className={styles.projectInfo}>
                <p className={styles.description}>
                O ACI Care é um dispositivo vestível inteligente desenvolvido para auxiliar no monitoramento e cuidado de idosos. Através de sensores, alertas em tempo real e um botão de emergência, a solução oferece mais segurança, independência e qualidade de vida para os usuários, além de proporcionar tranquilidade para familiares e cuidadores.
                </p>
                
                <p className={styles.description}>
                  Combinando IoT, computação em nuvem e monitoramento remoto, o ACI Care transforma tecnologia em cuidado, conectando pessoas e promovendo um envelhecimento mais seguro e ativo.
                </p>
              </div>
            </div>
          </div>

          <div className={styles.results}>
            <h3>Resultados Preliminares:</h3>
            <div className={styles.stats}>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>97,6%</span>
                <span className={styles.statLabel}>dos participantes acreditam que nosso dispositivo pode ajudar no monitoramento dos idosos</span>
              </div>
              <div className={styles.statItem}>
                <span className={styles.statNumber}>Apoio total</span>
                <span className={styles.statLabel}>Por profissionais da área realizada na pesquisa de campo</span>
              </div>
            </div>
          </div>

          <div className={styles.teamSection}>
            <h2 className={styles.teamTitle}>Equipe de Desenvolvimento</h2>
            <div className={styles.teamGrid}>
              <div className={styles.member}>
                <div className={styles.memberPhoto}>
                  <img 
                    src="/assets/images/caetano.png" 
                    alt="João Caetano" 
                    className={styles.memberImage}
                  />
                  <div className={styles.socialOverlay}>
                    <a href="https://www.instagram.com/ijoaocaetano/" target="_blank" className={styles.socialLink} title="Instagram">
                      <Instagram size={16} />
                    </a>
                    <a href="https://github.com/ijoaocaetano" target="_blank" className={styles.socialLink} title="GitHub">
                      <Github size={16} />
                    </a>
                  </div>
                </div>
                <h4>João Caetano</h4>
                <div className={styles.memberRoles}>
                  <span className={styles.role}>Design</span>
                  <span className={styles.role}>Programação</span>
                  <span className={styles.role}>Pesquisa</span>
                  <span className={styles.role}>Testes</span>
                </div>
              </div>

                <div className={styles.member}>
                <div className={styles.memberPhoto}>
                  <img 
                    src="/assets/images/alan.jpeg"
                    alt="Alan Pereira" 
                    className={styles.memberImage}
                  />
                  <div className={styles.socialOverlay}>
                    <a href="https://www.instagram.com/bigu.alan/" target="_blank" className={styles.socialLink} title="Instagram">
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
                <h4>Alan Pereira</h4>
                <div className={styles.memberRoles}>
                  <span className={styles.role}>Design</span>
                  <span className={styles.role}>Documentação</span>
                  <span className={styles.role}>Programação</span>
                  <span className={styles.role}>Pesquisa</span>
                </div>
              </div>
              
             <div className={styles.member}>
                <div className={styles.memberPhoto}>
                  <img 
                    src="/assets/images/ingrid.jpeg"
                    alt="Ingrid Graci" 
                    className={styles.memberImage}
                  />
                  <div className={styles.socialOverlay}>
                    <a href="https://www.instagram.com/ingridgraci_/" target="_blank" className={styles.socialLink} title="Instagram">
                      <Instagram size={16} />
                    </a>
                  </div>
                </div>
                <h4>Ingrid Graci</h4>
                <div className={styles.memberRoles}>
                  <span className={styles.role}>Design</span>
                  <span className={styles.role}>Documentação</span>
                  <span className={styles.role}>Programação</span>
                  <span className={styles.role}>Pesquisa</span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </motion.section>
  );
};

export default About;