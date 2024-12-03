'use client'

import { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import styles from '@/styles/components/Navigation.module.scss';

const Navigation = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const pathname = usePathname();

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <nav className={styles.navbar}>
      <div className={styles.navbar__container}>
        <div>
          <Link href="/" className={styles.navbar__logo}>
            <img
              src="/Images/LogoBlancosinFondo.png"
              alt="Logo"
              className={styles.logo}
            />
          </Link>

          <button 
            className={`${styles.navbar__mobile_button} ${isMenuOpen ? styles.active : ''}`}
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            <div className={styles.hamburger}>
              <span></span>
              <span></span>
              <span></span>
            </div>
          </button>
          
          <div className={`${styles.navbar__menu} ${isMenuOpen ? styles.menu_open : ''}`}>
            <Link 
              href="/products" 
              className={`${styles.navbar__link} ${pathname === '/products' ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Productos
            </Link>
            <Link 
              href="/training" 
              className={`${styles.navbar__link} ${pathname === '/training' ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Capacitación
            </Link>
            <Link 
              href="/partners" 
              className={`${styles.navbar__link} ${pathname === '/partners' ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Partners
            </Link>
            <Link 
              href="/about" 
              className={`${styles.navbar__link} ${pathname === '/about' ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Acerca de
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;