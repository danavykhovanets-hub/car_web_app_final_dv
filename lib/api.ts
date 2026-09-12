// lib/api.ts
import axios from "axios";
import type { Car } from "@/types/car";

const api = axios.create({
  baseURL: "https://car-rental-api.goit.study",
});

// --- GET /cars ---
export interface FetchCarsParams {
  brand?: string;
  price?: string;
  minMileage?: string;
  maxMileage?: string;
  page?: number;
  perPage?: number;
}

export interface CarsResponse {
  cars: Car[];
  totalCars: number;
  page: number;
  totalPages: number;
}

export async function fetchCars(params: FetchCarsParams): Promise<CarsResponse> {
  const response = await api.get<CarsResponse>("/cars", { params });
  return response.data;
}

// --- GET /cars/filters ---
export interface CarFiltersResponse {
  brands: string[];
  price: {
    min: number;
    max: number;
  };
}

export async function fetchCarFilters(): Promise<CarFiltersResponse> {
  const response = await api.get<CarFiltersResponse>("/cars/filters");
  return response.data;
}

// --- GET /cars/{id} ---
export async function fetchCarById(id: string): Promise<Car> {
  const response = await api.get<Car>(`/cars/${id}`);
  return response.data;
}

// --- POST /cars/{carId}/booking-requests ---
export interface BookingRequestPayload {
  name: string;
  email: string;
  comment: string;
}

export interface BookingRequestResponse {
  message: string;
}

export async function createBookingRequest(
  carId: string,
  payload: BookingRequestPayload
): Promise<BookingRequestResponse> {
  const response = await api.post<BookingRequestResponse>(
    `/cars/${carId}/booking-requests`,
    payload
  );
  return response.data;
}