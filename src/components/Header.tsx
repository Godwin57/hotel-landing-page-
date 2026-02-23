"use client";
import { useState, useEffect } from "react";
import styles from "./Header.module.css";

const navLinks = ["Home", "Rooms", "Services", "About", "Contact"];

export default function Header() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header className={`${styles.header} ${scrolled ? styles.scrolled : ""}`}>
      <div className={styles.logo}>
        <div className={styles.logoIcon}>★</div>
        <div className={styles.logoText}>
          <span>Twinny</span> Hotel
        </div>
      </div>

      <nav className={styles.nav}>
        {navLinks.map((link) => (
          <a
            key={link}
            href={`#${link.toLowerCase()}`}
            className={styles.navLink}
          >
            {link}
          </a>
        ))}
      </nav>

      <button className={styles.bookBtn}>Book Now</button>

      <button className={styles.mobileToggle} aria-label="Toggle menu">
        <span />
        <span />
        <span />
      </button>
    </header>
  );
}
