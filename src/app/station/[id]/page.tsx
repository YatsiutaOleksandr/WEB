import StationDetailsClient from "@/components/StationDetailsClient";

const siteUrl =
  process.env.NEXT_PUBLIC_SITE_URL ||
  (process.env.VERCEL_URL ? `https://${process.env.VERCEL_URL}` : "http://localhost:3000");

async function getStation(id: string) {
  const res = await fetch(`${siteUrl}/api/stations/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

async function getStations() {
  const res = await fetch(`${siteUrl}/api/stations`, {
    cache: "no-store",
  });

  return res.json();
}

async function getMeasurements(id: string) {
  const res = await fetch(
    `${siteUrl}/api/stations/${id}/measurements`,
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