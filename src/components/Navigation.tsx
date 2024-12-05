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
              href="/" 
              className={`${styles.navbar__link} ${pathname === '/' ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Sobre Nosotros
            </Link>
            
            <Link
              href="/nosotros"
              className={`${styles.navbar__link} ${pathname === '/nosotros' ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Nuestro Equipo
            </Link>
            <Link
              href="/oficinas"
              className={`${styles.navbar__link} ${pathname === '/oficinas' ? styles.active : ''}`}
              onClick={() => setIsMenuOpen(false)}
            >
              Nuestras Oficinas
            </Link>
          </div>
        </div>
      </div>
    </nav>
  );
};

export default Navigation;