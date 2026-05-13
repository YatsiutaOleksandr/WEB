import { NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(request: Request) {
  try {
    const body = await request.json();

    logger.error({
      source: "client",
      ...body,
    }, "Client error");

    return NextResponse.json({ ok: true });
  } catch (error) {
    logger.error({ error }, "Failed to save client log");

    return NextResponse.json(
      { message: "Не вдалося записати лог" },
      { status: 500 }
    );
  }
}
