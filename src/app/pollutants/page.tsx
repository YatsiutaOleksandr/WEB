import styles from "./pollutants.module.css";

export default function Pollutants() {
  const pollutants = [
    { name: "PM2.5", desc: "Fine particulate matter under 2.5 μm." },
    { name: "PM10", desc: "Particulate matter under 10 μm." },
    { name: "NO₂", desc: "Nitrogen dioxide, a harmful gas from combustion." },
    { name: "SO₂", desc: "Sulfur dioxide, causes respiratory problems." },
    { name: "CO", desc: "Carbon monoxide, poisonous gas." },
    { name: "O₃", desc: "Ozone, can be harmful at ground level." },
  ];
  return (
    <div>
      <h1 className={styles["pollutants-title"]}>Air Pollutants Guide</h1>
      <div className={styles["pollutants-list"]}>
        {pollutants.map((p) => (
          <div key={p.name} className={styles["pollutant-card"]}>
            <span className={styles["pollutant-name"]}>{p.name}</span>
            <span className={styles["pollutant-desc"]}>{p.desc}</span>
          </div>
        ))}
      </div>
    </div>
  );
}