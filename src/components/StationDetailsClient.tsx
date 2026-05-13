"use client";

import { useState } from "react";
import StationChartClient from "@/components/StationChartClient";
import styles from "./styles/StationDetailsClient.module.css";
import MapComponent from "@/components/MapComponent";
import { Measurement, Station } from "@/types";

export default function StationDetailsClient({
  station,
  stations,
  measurements,
}: {
  station: Station;
  stations: Station[];
  measurements: Measurement[];
}) 

{
  const [selectedStation, setSelectedStation] = useState(station);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>
        {selectedStation?.name || station.name}
      </h1>

      <p className={styles.subtitle}>
        Type: {selectedStation?.type || station.type}
      </p>

      <button
        onClick={() => setSelectedStation(station)}
        className={styles.resetButton}
      >
        Скинути вибір
      </button>

      <div className={styles.grid}>
        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            Карта станцій України
          </h2>

          <MapComponent
            stations={stations}
            selectedStation={selectedStation}
            setSelectedStation={setSelectedStation}
          />
        </div>

        <div className={styles.card}>
          <h2 className={styles.cardTitle}>
            Air Quality Measurements
          </h2>

          <StationChartClient
            measurements={measurements.slice(0, 6).reverse()}
          />
        </div>
      </div>
    </div>
  );
}