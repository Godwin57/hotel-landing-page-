import Image from "next/image";
import styles from "./About.module.css";

export default function About() {
  return (
    <section id="about" className={styles.about}>
      <div className={styles.aboutInner}>
        <div className={styles.imageWrapper}>
          <Image
            src="/images/about.png"
            alt="Luxury hotel interior"
            fill
            style={{ objectFit: "cover" }}
          />
          <div className={styles.experienceBadge}>
            <span className={styles.badgeNumber}>10+</span>
            <span className={styles.badgeText}>Years of Experience</span>
          </div>
        </div>

        <div className={styles.textContent}>
          <p className={styles.aboutLabel}>Our Story</p>
          <h2 className={styles.aboutTitle}>Your Gateway to Luxury in Lagos</h2>
          <p className={styles.aboutText}>
            Twinny Hotel and Suites is a comfortable and affordable hotel
            located in Ejigbo, close to Ajao Estate, Oshodi-Isolo, Lagos. We
            offer modern and high-quality accommodations for both business and
            leisure travellers.
          </p>
          <p className={styles.aboutText}>
            We provide affordable luxury, making us a top choice for travellers
            looking for hotels close to Lagos airport. With excellent customer
            service and a relaxing atmosphere, we ensure your stay is memorable.
          </p>
          <a href="#" className={styles.learnMore}>
            Learn More About Us <span className={styles.arrow}>→</span>
          </a>
        </div>
      </div>
    </section>
  );
}
