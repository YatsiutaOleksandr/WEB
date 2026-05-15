"use client";

import dynamic from "next/dynamic";
import { Measurement } from "@/types";

const StationChartContent = dynamic(
  () => import("./StationChartContent"),
  {
    loading: () => <div>Loading chart...</div>,
    ssr: false,
  }
);

export default function StationChart({
  measurements,
}: {
  measurements: Measurement[];
}) {
  return <StationChartContent measurements={measurements} />;
}
