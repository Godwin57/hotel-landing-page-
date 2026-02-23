"use client";
import styles from "./Footer.module.css";

export default function Footer() {
  return (
    <footer className={styles.footer}>
      <div className={styles.footerInner}>
        {/* Brand */}
        <div className={styles.brand}>
          <div className={styles.logo}>
            <div className={styles.logoIcon}>★</div>
            <div className={styles.logoText}>
              <span>Twinny</span> Hotel
            </div>
          </div>
          <p className={styles.brandDesc}>
            Providing premium hospitality services and affordable luxury in the
            heart of Lagos.
          </p>
          <div className={styles.socials}>
            <a href="#" className={styles.socialLink} aria-label="Twitter">
              𝕏
            </a>
            <a href="#" className={styles.socialLink} aria-label="Instagram">
              ◻
            </a>
            <a href="#" className={styles.socialLink} aria-label="Facebook">
              f
            </a>
          </div>
        </div>

        {/* Quick Links */}
        <div>
          <h4 className={styles.colTitle}>Quick Links</h4>
          <div className={styles.colLinks}>
            <a href="#">Hotel Rooms</a>
            <a href="#">Shortlet Apartments</a>
            <a href="#">Our Services</a>
            <a href="#">Terms &amp; Conditions</a>
          </div>
        </div>

        {/* Contact */}
        <div>
          <h4 className={styles.colTitle}>Contact Us</h4>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📍</div>
            <p className={styles.contactText}>
              Ramoni Jimoh St, beside Bokku Mart, Ejigbo, Ikeja 100264, Lagos
            </p>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>📞</div>
            <p className={styles.contactText}>0814 077 8877</p>
          </div>
          <div className={styles.contactItem}>
            <div className={styles.contactIcon}>✉️</div>
            <p className={styles.contactText}>hello@twinnyhotelandsuites.com</p>
          </div>
        </div>

        {/* Newsletter */}
        <div>
          <h4 className={styles.colTitle}>Newsletter</h4>
          <p className={styles.newsletterDesc}>
            Subscribe for exclusive offers and updates.
          </p>
          <form
            className={styles.newsletterForm}
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              placeholder="Your email address"
              className={styles.emailInput}
            />
            <button type="submit" className={styles.subscribeBtn}>
              Subscribe
            </button>
          </form>
        </div>
      </div>

      <div className={styles.bottomBar}>
        <p>
          Twinny Suites © {new Date().getFullYear()}. All Rights Reserved.
          Official Website of Twinny Suites.
        </p>
      </div>
    </footer>
  );
}
