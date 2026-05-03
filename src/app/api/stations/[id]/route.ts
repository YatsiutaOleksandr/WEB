import { NextResponse } from "next/server";
import { stations } from "../../../../lib/data";

export async function GET(
  req: Request,
  { params }: { params: Promise<{ id: string | string[] }> }
) {
  const resolvedParams = await params;
  const id = Array.isArray(resolvedParams.id) ? resolvedParams.id[0] : resolvedParams.id;

  console.log("Incoming ID:", id);

  const station = stations.find((s) => String(s.id) === String(id));

  if (!station) {
    return NextResponse.json({ error: "Station not found" }, { status: 404 });
  }

  return NextResponse.json({ data: station });
}