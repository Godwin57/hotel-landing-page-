import styles from "./Testimonials.module.css";

const reviews = [
  {
    quote:
      "The customer service was impeccable. Truly a home away from home. The proximity to the airport made my business trip so much easier.",
    name: "Chidi Okafor",
    role: "Business Traveler",
    initials: "CO",
  },
  {
    quote:
      "Modern decor, 24/7 electricity, and super fast wifi. The Executive room was spacious and very clean. Highly recommend!",
    name: "Sarah Alabi",
    role: "Tourist",
    initials: "SA",
  },
];

export default function Testimonials() {
  return (
    <section className={styles.testimonials}>
      <div className={styles.inner}>
        <div className={styles.header}>
          <h2 className={styles.title}>Guest Experiences</h2>
          <p className={styles.subtitle}>
            What our guests say about their stay at Twinny Hotel
          </p>
        </div>

        <div className={styles.grid}>
          {reviews.map((r) => (
            <div key={r.name} className={styles.card}>
              <div className={styles.stars}>
                {"★★★★★".split("").map((s, i) => (
                  <span key={i}>{s}</span>
                ))}
              </div>
              <p className={styles.quote}>&ldquo;{r.quote}&rdquo;</p>
              <div className={styles.author}>
                <div className={styles.avatar}>{r.initials}</div>
                <div className={styles.authorInfo}>
                  <h4>{r.name}</h4>
                  <p>{r.role}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
