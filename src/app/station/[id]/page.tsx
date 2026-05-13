import StationDetailsClient from "@/components/StationDetailsClient";

async function getStation(id: string) {
  const res = await fetch(`http://localhost:3000/api/stations/${id}`, {
    cache: "no-store",
  });
  return res.json();
}

async function getStations() {
  const res = await fetch("http://localhost:3000/api/stations", {
    cache: "no-store",
  });

  return res.json();
}

async function getMeasurements(id: string) {
  const res = await fetch(
    `http://localhost:3000/api/stations/${id}/measurements`,
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