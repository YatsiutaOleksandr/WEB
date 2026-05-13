"use client";

import { useEffect, useState } from "react";
import Link from "next/link";
import "leaflet/dist/leaflet.css";
import type { MapComponentProps, Station } from "../types";
import styles from "./styles/MapComponent.module.css";
import { analytics } from "@/lib/analytics";

export default function MapComponent({
  stations,
  selectedStation,
  setSelectedStation,
}: MapComponentProps) {
  const [modules, setModules] = useState<any>(null);
  const [mapRef, setMapRef] = useState<any>(null);

  useEffect(() => {
    Promise.all([import("react-leaflet"), import("leaflet")]).then(
      ([ReactLeaflet, Leaflet]) => {
        setModules({ ReactLeaflet, L: Leaflet.default });
      }
    );
  }, []);

  // Обробка zoom события
  useEffect(() => {
    if (mapRef) {
      const handleZoom = () => {
        analytics.mapZoom();
      };

      mapRef.on("zoom", handleZoom);

      return () => {
        mapRef.off("zoom", handleZoom);
      };
    }
  }, [mapRef]);

  if (!modules) {
    return <div className={styles.loading}>Loading map...</div>;
  }

  const { MapContainer, TileLayer, Marker, Popup, useMap } = modules.ReactLeaflet;

  // Компонент для отримання посилання на карту
  function MapRef() {
    const map = useMap();
    useEffect(() => {
      setMapRef(map);
    }, [map]);
    return null;
  }

  const getPollution = (station: Station) =>
    typeof station.latestIndex === "number"
      ? station.latestIndex * 100
      : station.value ?? 0;

  const getColor = (value: number) => {
    if (value < 25) return "green";
    if (value < 50) return "#eab308";
    if (value < 75) return "orange";
    return "red";
  };

  const createIcon = (value: number, isActive: boolean) =>
    modules.L.divIcon({
      className: "",
      html: `<div class="${styles.marker}" style="
        --marker-size: ${isActive ? "32px" : "24px"};
        --marker-color: ${getColor(value)};
        --marker-border: ${isActive ? "black" : "white"};
      "></div>`,
    });

  return (
    <MapContainer
      center={[48.3794, 31.1656]}
      zoom={6}
      className={styles.map}
    >
      <MapRef />
      <TileLayer
        attribution="&copy; OpenStreetMap contributors"
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />

      {stations.map((station: Station) => {
        const pollution = getPollution(station);
        const isActive = selectedStation?.id === station.id;

        return (
          <Marker
            key={station.id}
            position={[station.latitude, station.longitude]}
            icon={createIcon(pollution, isActive)}
            eventHandlers={{
              click: () => {
                setSelectedStation?.(station);
                analytics.mapClick(station.id, station.name);
              },
            }}
          >
            <Popup>
              <b>{station.name}</b>
              <br />
              Type: {station.type}
              <br />
              Pollution: {pollution.toFixed(0)}%
              <br />
              <Link href={`/station/${station.id}`}>View Details →</Link>
            </Popup>
          </Marker>
        );
      })}
    </MapContainer>
  );
}