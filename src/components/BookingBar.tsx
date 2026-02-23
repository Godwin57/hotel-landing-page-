import styles from "./BookingBar.module.css";

export default function BookingBar() {
  return (
    <div className={styles.bookingBar}>
      <div className={styles.barInner}>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Check In</div>
          <div className={styles.fieldValue}>
            <span className={styles.fieldIcon}>📅</span>
            Select Date
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Check Out</div>
          <div className={styles.fieldValue}>
            <span className={styles.fieldIcon}>📅</span>
            Select Date
          </div>
        </div>
        <div className={styles.field}>
          <div className={styles.fieldLabel}>Guests / Room</div>
          <div className={styles.fieldValue}>
            <span className={styles.fieldIcon}>👤</span>2 Adults, 1 Room
          </div>
        </div>
        <button className={styles.checkBtn}>Check Availability</button>
      </div>
    </div>
  );
}
