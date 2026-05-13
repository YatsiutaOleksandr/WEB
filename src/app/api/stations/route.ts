import { NextResponse, NextRequest } from "next/server";
import { stations, measurements } from "../../../lib/data";
import { logger } from "@/lib/logger";

export async function GET(request: NextRequest) {
  try {
    const searchParams = request.nextUrl.searchParams;
    const testError = searchParams.get("test_error");

    logger.info({ route: "/api/stations", testError }, "Fetching stations");

    // Тест помилки
    if (testError === "true") {
      throw new Error("Test API error - this is a simulated error for testing!");
    }

    const data = stations.map((station) => {
      const latestMeasurement = measurements
        .filter((m) => Number(m.stationId) === Number(station.id))
        .sort(
          (a, b) =>
            new Date(b.timestamp).getTime() -
            new Date(a.timestamp).getTime()
        )[0];

      return {
        ...station,
        latestIndex: latestMeasurement ? latestMeasurement.data.pm25 / 100 : 0,
        value: latestMeasurement?.data.pm25 ?? 0,
      };
    });

    return NextResponse.json({ data });
  } catch (error) {
    logger.error({ error }, "Failed to fetch stations");

    return NextResponse.json(
      { message: "Не вдалося завантажити станції" },
      { status: 500 }
    );
  }
}