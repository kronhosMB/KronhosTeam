'use client'

import Link from 'next/link';
import { Mail, MessageCircle, Facebook, Youtube, Linkedin, Instagram, ArrowUp } from 'lucide-react';
import styles from '@/styles/components/Footer.module.scss';

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <img src="/Images/LogoBlancosinFondo.png" alt="Logo" className={styles.logo} />
            <p>Transformando negocios a través de soluciones tecnológicas innovadoras.</p>
            <div className={styles.footer__contact}>
              <button className={styles.contactBtn}>
                <Mail />
                Contáctenos
              </button>
              <button className={styles.contactBtn}>
                <MessageCircle />
                Chat en línea
              </button>
            </div>
          </div>

          <div className={styles.footer__content}>
            <div className={styles.footer__section}>
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><Link href="#">Trust Center</Link></li>
                <li><Link href="#">Soluciones</Link></li>
                <li><Link href="#">Industrias</Link></li>
                <li><Link href="#">Partners</Link></li>
                <li><Link href="#">Demos</Link></li>
              </ul>
            </div>

            <div className={styles.footer__section}>
              <h3>Tendencias</h3>
              <ul>
                <li><Link href="#">Business AI</Link></li>
                <li><Link href="#">GROW with SAP</Link></li>
                <li><Link href="#">RISE with SAP</Link></li>
                <li><Link href="#">Sostenibilidad</Link></li>
              </ul>
            </div>

            <div className={styles.footer__section}>
              <h3>Compañía</h3>
              <ul>
                <li><Link href="#">Sobre Nosotros</Link></li>
                <li><Link href="#">Carreras</Link></li>
                <li><Link href="#">Noticias</Link></li>
                <li><Link href="#">Eventos</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__social}>
            <Link href="#"><Facebook /></Link>
            <Link href="#"><Youtube /></Link>
            <Link href="#"><Linkedin /></Link>
            <Link href="#"><Instagram /></Link>
            <Link href="#"><Mail /></Link>
          </div>

          <div className={styles.footer__legal}>
            <Link href="#">Privacidad</Link>
            <Link href="#">Términos</Link>
            <Link href="#">Cookies</Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;