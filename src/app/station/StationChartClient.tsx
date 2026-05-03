import StationChart from "./StationChart";

export default function StationChartClient({ measurements }: { measurements: any[] }) {
  return <StationChart measurements={measurements} />;
}
