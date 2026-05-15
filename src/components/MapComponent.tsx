"use client";

import dynamic from "next/dynamic";
import type { MapComponentProps } from "../types";
import styles from "./styles/MapComponent.module.css";

const MapContent = dynamic(() => import("./MapContent"), {
  loading: () => <div className={styles.loading}>Loading map...</div>,
  ssr: false,
});

export default function MapComponent({
  stations,
  selectedStation,
  setSelectedStation,
}: MapComponentProps) {
  return (
    <MapContent
      stations={stations}
      selectedStation={selectedStation}
      setSelectedStation={setSelectedStation}
    />
  );
}