import Link from "next/link";
import styles from "./styles/mainpage.module.css";
import MapComponent from "@/components/MapComponent";
import type { Station } from "@/types";

async function getStations() {
  const res = await fetch("http://localhost:3000/api/stations", {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const { data } = await getStations();

  return (
    <div>
      <h1 className={styles["stations-title"]}>Monitoring Stations</h1>

      <p className={styles["stations-desc"]}>
        Here you can see all monitoring stations and their current air quality.
      </p>

      <div className={styles["stations-list"]}>
        {data.map((s: Station) => (
          <div key={s.id} className={styles["station-card"]}>
            <div className={styles["card-header"]}>
              <span>{s.name}</span>
              <span className={styles["station-badge"]}>PM2.5</span>
            </div>

            <div className={styles["station-type"]}>Type: {s.type}</div>
            <div className={styles["station-value"]}>{(s.value ?? 45).toFixed(1)}</div>

            <Link href={`/station/${s.id}`} className={styles["station-link"]}>
              View Details →
            </Link>
          </div>
        ))}
      </div>

      <div className={styles["map-section"]}>
        <MapComponent stations={data} />
      </div>
    </div>
  );
}