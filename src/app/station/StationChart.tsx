"use client";
import { Line } from "react-chartjs-2";
import {
  Chart as ChartJS,
  CategoryScale,
  LinearScale,
  PointElement,
  LineElement,
  Legend,
  Tooltip,
} from "chart.js";

ChartJS.register(CategoryScale, LinearScale, PointElement, LineElement, Legend, Tooltip);

export default function StationChart({ measurements }: { measurements: any[] }) {
  const labels = measurements.map((m) => new Date(m.timestamp).toLocaleTimeString([], { hour: "2-digit", minute: "2-digit" }));
  const datasets = [
    {
      label: "co",
      data: measurements.map((m) => m.data.co),
      borderColor: "#22d3ee",
      backgroundColor: "#22d3ee33",
      fill: false,
    },
    {
      label: "no2",
      data: measurements.map((m) => m.data.no2),
      borderColor: "#818cf8",
      backgroundColor: "#818cf833",
      fill: false,
    },
    {
      label: "o3",
      data: measurements.map((m) => m.data.o3 || 0),
      borderColor: "#34d399",
      backgroundColor: "#34d39933",
      fill: false,
    },
    {
      label: "pm10",
      data: measurements.map((m) => m.data.pm10),
      borderColor: "#f59e42",
      backgroundColor: "#f59e4233",
      fill: false,
    },
    {
      label: "pm25",
      data: measurements.map((m) => m.data.pm25),
      borderColor: "#ef4444",
      backgroundColor: "#ef444433",
      fill: false,
    },
    {
      label: "so2",
      data: measurements.map((m) => m.data.so2 || 0),
      borderColor: "#a78bfa",
      backgroundColor: "#a78bfa33",
      fill: false,
    },
  ];

  const data = {
    labels,
    datasets,
  };

  const options = {
    responsive: true,
    plugins: {
      legend: {
        display: true,
        position: "bottom" as const,
      },
    },
    scales: {
      y: {
        beginAtZero: true,
      },
    },
  };

  return (
    <Line data={data} options={options} />
  );
}
