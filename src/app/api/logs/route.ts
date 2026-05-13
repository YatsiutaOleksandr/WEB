import { NextRequest, NextResponse } from "next/server";
import { logger } from "@/lib/logger";

export async function POST(request: NextRequest) {
  try {
    const body = await request.json();

    logger.error({
      source: "client",
      message: body.message,
      stack: body.stack,
      userAgent: request.headers.get("user-agent"),
      timestamp: new Date().toISOString(),
    });

    return NextResponse.json({ success: true });
  } catch (error) {
    logger.error({ error }, "Failed to log client error");

    return NextResponse.json(
      { message: "Failed to log error" },
      { status: 500 }
    );
  }
}
