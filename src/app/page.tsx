import HomePageClient from "@/components/HomePageClient";
import type { Station } from "@/types";
import { headers } from "next/headers";

async function getSiteUrl() {
  const host = (await headers()).get("host") || "localhost:3000";
  const protocol = host.includes("localhost") ? "http" : "https";
  return process.env.NEXT_PUBLIC_SITE_URL || `${protocol}://${host}`;
}

async function getStations() {
  const res = await fetch(`${await getSiteUrl()}/api/stations`, {
    cache: "no-store",
  });
  return res.json();
}

export default async function HomePage() {
  const { data } = await getStations();

  return <HomePageClient stations={data} />;
}