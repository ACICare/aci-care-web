import { useState, useEffect } from 'react';
import { motion } from 'framer-motion';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import { LogIn } from 'lucide-react';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const location = useLocation();
  const navigate = useNavigate();

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'about' },
  ];

  // Scroll para a seção
  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navega para home e usa hash para scroll
      navigate('/#' + sectionId);
      return;
    }

    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
      setIsMenuOpen(false);
    }
  };

  // Se houver hash na URL, faz scroll ao carregar
  useEffect(() => {
    if (location.hash) {
      const sectionId = location.hash.replace('#', '');
      const element = document.getElementById(sectionId);
      if (element) {
        setTimeout(() => {
          element.scrollIntoView({ behavior: 'smooth', block: 'start' });
        }, 100); // delay para garantir que a página já carregou
      }
    }
  }, [location]);

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Botão menu mobile */}
        <button
          className={styles.menuButton}
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          aria-label="Toggle menu"
        >
          <div className={styles.menuButtonInner}>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
            <div className={styles.bar}></div>
          </div>
        </button>

        {/* Navegação desktop */}
        <nav className={styles.desktopNav}>
          <ul className={styles.menuList}>
            {menuItems.map((item, index) => (
              <motion.li
                key={item.id}
                initial={{ opacity: 0, y: -30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  type: 'spring',
                  stiffness: 40,
                  damping: 25,
                  delay: 0.1 + index * 0.1,
                  duration: 1.5,
                }}
              >
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={styles.menuLink}
                >
                  {item.name}
                </button>
              </motion.li>
            ))}

            {/* Botão Login desktop */}
            <motion.li
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 40,
                damping: 25,
                delay: 0.3,
              }}
            >
              <Link to="/login" className={styles.ctaSecondary}>
                <LogIn size={18} style={{ marginRight: '6px', color: '#fff' }} />
                Login
              </Link>
            </motion.li>
          </ul>
        </nav>
      </div>

      {/* Navegação mobile */}
      <nav
        className={`${styles.mobileNav} ${isMenuOpen ? styles.mobileNavOpen : ''}`}
      >
        <ul className={styles.mobileList}>
          {menuItems.map((item, index) => (
            <motion.li
              key={item.id}
              initial={{ opacity: 0, y: -30 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{
                type: 'spring',
                stiffness: 40,
                damping: 25,
                delay: 0.1 + index * 0.1,
                duration: 1.5,
              }}
            >
              <button
                onClick={() => scrollToSection(item.id)}
                className={styles.mobileLink}
              >
                {item.name}
              </button>
            </motion.li>
          ))}

          {/* Botão Login mobile */}
          <motion.li
            initial={{ opacity: 0, y: -30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{
              type: 'spring',
              stiffness: 40,
              damping: 25,
              delay: 0.3,
            }}
          >
            <Link to="/login" className={styles.mobileCtaSecondary}>
              <LogIn size={18} style={{ marginRight: '6px', color: '#fff' }} />
              Login
            </Link>
          </motion.li>
        </ul>
      </nav>
    </header>
  );
}
