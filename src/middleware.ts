import { NextRequest, NextResponse } from "next/server";

export function middleware(request: NextRequest) {
  const start = Date.now();
  const response = NextResponse.next();
  const durationMs = Date.now() - start;

  // Логуємо у консоль (middleware працює на Edge Runtime)
  const logData = {
    level: durationMs > 1000 ? "warn" : "info",
    method: request.method,
    url: request.nextUrl.pathname,
    status: response.status,
    durationMs,
    timestamp: new Date().toISOString(),
  };

  console.log(JSON.stringify(logData));

  return response;
}

export const config = {
  matcher: ["/((?!_next/static|_next/image|favicon.ico).*)"],
};
