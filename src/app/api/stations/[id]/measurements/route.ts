import { NextResponse } from "next/server";
import { measurements } from "../../../../../lib/data";

export async function GET(req: Request) {
  const { searchParams } = new URL(req.url);
  const stationId = searchParams.get("stationId");

  let result = measurements;

if (stationId) {
  result = result.filter((m) => String(m.stationId) === String(stationId));
}

  return NextResponse.json({ data: result });
}