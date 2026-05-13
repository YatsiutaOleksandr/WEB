import StationDetailsClient from "@/components/StationDetailsClient";
import { headers } from "next/headers";

async function getSiteUrl() {
  const host = (await headers()).get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  return process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
}

async function getStation(id: string) {
  const res = await fetch(`${await getSiteUrl()}/api/stations/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

async function getStations() {
  const res = await fetch(`${await getSiteUrl()}/api/stations`, {
    cache: "no-store",
  });

  return res.json();
}

async function getMeasurements(id: string) {
  const res = await fetch(
    `${await getSiteUrl()}/api/stations/${id}/measurements`,
    { cache: "no-store" }
  );
  return res.json();
}

export default async function StationPage({ params }: any) {
  const resolvedParams = await params;

  const station = await getStation(resolvedParams.id);
  const stations = await getStations();
  const measurements = await getMeasurements(resolvedParams.id);

  if (!station || !station.data) {
    return <div>Station not found</div>;
  }

  return (
    <StationDetailsClient
      station={station.data}
      stations={stations.data}
      measurements={measurements.data}
    />
  );
}