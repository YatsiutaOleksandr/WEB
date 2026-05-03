async function getStation(id: string) {
  const res = await fetch(`http://localhost:3000/api/stations/${id}`, {
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


import StationChartClient from "../StationChartClient";

export default async function StationPage({ params }: any) {
  const resolvedParams = await params;
  console.log("params:", resolvedParams);
  const station = await getStation(resolvedParams.id);
  const measurements = await getMeasurements(resolvedParams.id);

  if (!station || !station.data) {
    return <div className="text-red-600">Station not found.</div>;
  }

  return (
    <div>
      <div className="text-xl font-semibold mb-1">{station.data.name}</div>
      <div className="text-gray-600 mb-4">Type: {station.data.type}</div>
      <div className="bg-white rounded-xl shadow p-6 max-w-3xl mx-auto">
        <div className="font-semibold mb-3">Air Quality Measurements</div>
        <StationChartClient measurements={measurements.data.slice(0, 6).reverse()} />
      </div>
    </div>
  );
}