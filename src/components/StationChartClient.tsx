import { Measurement } from "@/types";
import StationChart from "./StationChart";

export default function StationChartClient({ measurements }: { measurements: Measurement[] }) {
  return <StationChart measurements={measurements} />;
}
