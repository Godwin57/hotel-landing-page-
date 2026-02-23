import Image from "next/image";
import styles from "./Hero.module.css";

export default function Hero() {
  return (
    <section id="home" className={styles.hero}>
      <div className={styles.heroBg}>
        <Image
          src="/images/hero.png"
          alt="Luxury hotel room interior"
          fill
          priority
          style={{ objectFit: "cover" }}
        />
      </div>

      <div className={styles.heroContent}>
        <h1 className={styles.heroTitle}>
          Experience <span className={styles.accent}>Refined</span> Luxury
        </h1>
        <p className={styles.heroSubtitle}>
          Ideally located in Ejigbo, Lagos, offering sophisticated
          accommodations for business and leisure travelers looking for comfort
          close to the airport.
        </p>
        <div className={styles.heroCtas}>
          <a href="#rooms" className="btn-primary">
            Explore Rooms
          </a>
          <button className={styles.tourBtn}>
            <span className={styles.playIcon}>▶</span>
            Virtual Tour
          </button>
        </div>
        <div className={styles.badge}>
          <span className={styles.badgeNumber}>10+</span>
          Years of Excellence
        </div>
      </div>

      <div className={styles.scrollIndicator}>
        <div className={styles.scrollLine} />
      </div>
    </section>
  );
}
