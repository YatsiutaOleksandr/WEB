import { track } from "@vercel/analytics";

export const analytics = {
  stationView: (id: number | string, name: string) =>
    track("station_view", { id, name }),

  mapClick: (id: number | string, name: string) =>
    track("map_click", { id, name }),

  mapZoom: () =>
    track("map_zoom"),

  chartView: () =>
    track("chart_view"),

  filterApply: (filter: string) =>
    track("filter_apply", { filter }),

  exportData: () =>
    track("export_data"),
};
