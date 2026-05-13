import { NextResponse } from "next/server";
import { stations, measurements } from "../../../lib/data";

export async function GET() {
  const data = stations.map((station) => {
    const latestMeasurement = measurements
      .filter((m) => Number(m.stationId) === Number(station.id))
      .sort(
        (a, b) =>
          new Date(b.timestamp).getTime() -
          new Date(a.timestamp).getTime()
      )[0];

    const latestIndex = latestMeasurement
      ? latestMeasurement.data.pm25 / 100
      : 0;

    return {
      ...station,
      latestIndex,
      value: latestMeasurement?.data.pm25 ?? 0,
    };
  });

  return NextResponse.json({ data });
}