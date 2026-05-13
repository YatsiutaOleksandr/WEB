import { Station, Measurement } from "../types";

export const stations: Station[] = [
  { id: 1, name: "Kyiv Center", latitude: 50.45, longitude: 30.52, type: "urban" },
  { id: 2, name: "Lviv", latitude: 49.84, longitude: 24.03, type: "urban" },
  { id: 3, name: "Dnipro", latitude: 48.45, longitude: 34.98, type: "industrial" },
  { id: 4, name: "Odessa", latitude: 46.48, longitude: 30.72, type: "urban" },
  { id: 5, name: "Village", latitude: 50.00, longitude: 31.00, type: "rural" },
];

export const measurements: Measurement[] = Array.from({ length: 20 }).map((_, i) => ({
  id: String(i),
  stationId: Number((i % 5) + 1),
  timestamp: new Date(Date.now() - i * 3600000).toISOString(),
  data: {
    pm25: Math.random() * 50,
    pm10: Math.random() * 80,
    no2: Math.random() * 40,
    co: Math.random() * 10,
    o3: Math.random() * 30,
    so2: Math.random() * 20,
  },
}));