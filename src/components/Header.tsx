import { useState } from 'react';
import { LogIn } from 'lucide-react';
import { Link, useNavigate, useLocation } from 'react-router-dom';
import styles from './Header.module.css';

export default function Header() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const navigate = useNavigate();
  const location = useLocation();

  const menuItems = [
    { name: 'Home', id: 'home' },
    { name: 'Sobre', id: 'about' },
    { name: 'Projeto', id: 'project' },
  ];

  const scrollToSection = (sectionId: string) => {
    if (location.pathname !== '/') {
      // Navega para a home e passa o hash via state
      navigate('/', { state: { scrollTo: sectionId } });
      setIsMenuOpen(false);
      return;
    }

    // Se já estamos na home, faz o scroll direto
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
    setIsMenuOpen(false);
  };

  return (
    <header className={styles.header}>
      <div className={styles.container}>
        {/* Botão mobile */}
        <button
          onClick={() => setIsMenuOpen(!isMenuOpen)}
          className={styles.menuButton}
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
            {menuItems.map((item) => (
              <li key={item.id}>
                <button
                  onClick={() => scrollToSection(item.id)}
                  className={styles.menuLink}
                >
                  {item.name}
                </button>
              </li>
            ))}
            <li>
              <Link to="/login" className={styles.ctaSecondary}>
                <LogIn size={18} style={{ marginRight: '6px', color: '#fff' }} />
                Login
              </Link>
            </li>
          </ul>
        </nav>

        {/* Navegação mobile */}
        {isMenuOpen && (
          <nav className={styles.mobileNav}>
            <ul className={styles.mobileList}>
              {menuItems.map((item) => (
                <li key={item.id}>
                  <button
                    onClick={() => scrollToSection(item.id)}
                    className={styles.mobileLink}
                  >
                    {item.name}
                  </button>
                </li>
              ))}
              <li>
                <Link to="/login" className={styles.mobileCtaSecondary}>
                  <LogIn size={18} style={{ marginRight: '6px', color: '#fff' }} />
                  Login
                </Link>
              </li>
            </ul>
          </nav>
        )}
      </div>
    </header>
  );
}
