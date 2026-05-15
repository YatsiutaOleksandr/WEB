"use client";

import Link from "next/link";
import dynamic from "next/dynamic";
import styles from "./styles/mainpage.module.css";
import TestErrorComponent from "@/components/TestErrorComponent";
import type { Station } from "@/types";

const MapComponent = dynamic(() => import("@/components/MapComponent"), {
  loading: () => <div className={styles.mapLoading}>Loading map...</div>,
  ssr: false,
});

export default function HomePageClient({ stations }: { stations: Station[] }) {
  return (
    <div>
      <h1 className={styles["stations-title"]}>Monitoring Stations</h1>

      <p className={styles["stations-desc"]}>
        Here you can see all monitoring stations and their current air quality.
      </p>

      <div className={styles["stations-list"]}>
        {stations.map((s: Station) => (
          <div key={s.id} className={styles["station-card"]}>
            <div className={styles["card-header"]}>
              <span>{s.name}</span>
              <span className={styles["station-badge"]}>PM2.5</span>
            </div>

            <div className={styles["station-type"]}>Type: {s.type}</div>
            <div className={styles["station-value"]}>
              {(s.value ?? 45).toFixed(1)}
            </div>

            <Link href={`/station/${s.id}`} className={styles["station-link"]}>
              View Details →
            </Link>
          </div>
        ))}
      </div>

      <div className={styles["map-section"]}>
        <MapComponent stations={stations} />
      </div>

      <TestErrorComponent />
    </div>
  );
}
