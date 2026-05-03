import styles from "./about.module.css";

export default function About() {
  return (
    <div className={styles["about-container"]}>
      <h1 className={styles["about-title"]}>About EcoMonitor</h1>
      <p className={styles["about-desc"]}>
        EcoMonitor is a web application for real-time air quality monitoring in Ukraine. It provides information about monitoring stations, air pollutants, and environmental indicators in a user-friendly interface.
      </p>
    </div>
  );
}