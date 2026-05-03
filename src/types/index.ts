export type StationType = "urban" | "industrial" | "rural";

export interface Station {
  id: number;
  name: string;
  latitude: number;
  longitude: number;
  type: StationType;
}

export interface AirQuality {
  pm25: number;
  pm10: number;
  no2: number;
  co: number;
}

export interface Measurement {
  id: string;
  stationId: number;
  timestamp: string;
  data: AirQuality;
}

// API

export interface ApiResponse<T> {
  data: T;
  error?: string;
}

export interface GetStationsQuery {
  page?: number;
  limit?: number;
}

export interface ErrorResponse {
  error: string;
}