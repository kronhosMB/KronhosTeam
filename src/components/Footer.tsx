'use client';

import Link from 'next/link';
import { Mail, Facebook, Youtube, Linkedin, Instagram, Phone } from 'lucide-react';
import Image from 'next/image'
import styles from '@/styles/components/Footer.module.scss';

const Footer = () => {
  return (
    <footer className={styles.footer}>
      <div className={styles.footer__container}>
        <div className={styles.footer__top}>
          <div className={styles.footer__brand}>
            <Image
              src="/Images/LogoBlancosinFondo.png"
              alt="Logo"
              width={150}
              height={50}
              className="w-[150px] md:w-[200px] lg:w-[250px] h-auto"
              style={{ objectFit: 'contain' }}
            />
            <p>Transformando negocios a través de soluciones tecnológicas innovadoras.</p>
            <div className={styles.footer__contact}>
              <Link href="/contact" className={styles.contactBtn}>
                <Mail />
                Contáctenos
              </Link>
              <a href="tel:+593 98 350 2996" className={styles.contactBtn}>
                <Phone />
                +593 98 350 2996
              </a>
            </div>
          </div>

          <div className={styles.footer__content}>
            <div className={styles.footer__section}>
              <h3>Nosotros</h3>
              <ul>
                <li><Link href="/socialResponsibility">Responsabilidad Social</Link></li>
                <li><Link href="/financialEducation">Educación financiera</Link></li>
                <li><Link href="/transparency">Transparencia</Link></li>
                <li><Link href="/pay">Red de pagos</Link></li>
              </ul>
            </div>

            <div className={styles.footer__section}>
              <h3>Políticas</h3>
              <ul>
                <li><Link href="/privacy">Políticas de privacidad</Link></li>
                <li><Link href="/security">Consejos de seguridad</Link></li>
                <li><Link href="/terms">Términos y condiciones</Link></li>
                <li><Link href="/cookies">Políticas de Cookies</Link></li>
              </ul>
            </div>

            <div className={styles.footer__section}>
              <h3>Enlaces Rápidos</h3>
              <ul>
                <li><Link href="/">Kronhos ERP</Link></li>
                <li><Link href="#">Kronhos Team</Link></li>
                <li><Link href="#">Nuestro Equipo</Link></li>
                <li><Link href="#">Ubicaciones</Link></li>
              </ul>
            </div>

            <div className={styles.footer__section}>
              <h3>Soporte</h3>
              <ul>
                <li><Link href="/contact">Atención o Reclamos</Link></li>
              </ul>
            </div>
          </div>
        </div>

        <div className={styles.footer__bottom}>
          <div className={styles.footer__social}>
            <Link href="https://www.facebook.com/kronhosBS"><Facebook /></Link>
            <Link href="https://www.youtube.com/@kronhosBS"><Youtube /></Link>
            <Link href="https://www.linkedin.com/products/kronhos-business-solutions-cia-ltda-kronhos-erp/"><Linkedin /></Link>
            <Link href="https://www.instagram.com/kronhos.bs/profilecard/?igsh=MWE4MWtobjNyZnJ5NQ=="><Instagram /></Link>
          </div>

          <div className={styles.footer__copyright}>
            <p>&copy; {new Date().getFullYear()} Kronhos Business Solutions. Todos los derechos reservados.</p>
          </div>

          <div className={styles.footer__legal}>
            <Link href="/privacy" className="hover:underline">
              Privacidad
            </Link>
            <Link href="/terms" className="hover:underline">
              Términos
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;