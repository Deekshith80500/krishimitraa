/**
 * @license
 * SPDX-License-Identifier: Apache-2.0
 */

export interface CropProblemAttempt {
  id: string;
  timestamp: string;
  cropName: string;
  detectedProblem: string;
  confidence: number;
  symptoms: string[];
  immediateTreatment: string[];
  prevention: string[];
  imageUrl?: string;
  languageSelected: string;
}

export type SupportedLanguage = 
  | "en" // English
  | "hi" // Hindi
  | "kn" // Kannada
  | "te" // Telugu
  | "ta" // Tamil
  | "mr" // Marathi
  | "bn" // Bengali
  | "ml" // Malayalam
  | "gu" // Gujarati
  | "pa"; // Punjabi

export interface LanguageConfig {
  code: SupportedLanguage;
  name: string;
  nativeName: string;
}

export interface Expert {
  id: string;
  name: string;
  role: string; // Krishi Vigyan Kendra, Public Agriculture Officer, Private Agronomist
  specialty: string;
  distance: string; // "1.2 km away", "3.5 km away", etc.
  phone: string;
  organization: string;
  rating: number;
  online: boolean;
  avatarUrl?: string;
}

export interface ChatMessage {
  id: string;
  sender: "farmer" | "expert";
  text: string;
  timestamp: string;
  recordingUrl?: string; // If sound message
  imageUrl?: string;
}

export interface Appointment {
  id: string;
  expertId: string;
  expertName: string;
  date: string;
  timeSlot: string;
  status: "scheduled" | "completed" | "canceled";
  notes?: string;
}

export interface WeatherData {
  city: string;
  temp: number;
  humidity: number;
  windSpeed: number;
  condition: string;
  conditionCode: number;
  description: string;
  forecast: {
    date: string;
    dayName: string;
    tempMax: number;
    tempMin: number;
    conditionCode: number;
    condition: string;
  }[];
  farmingAdvice: {
    irrigation: string;
    spraying: string;
    harvesting: string;
    general: string;
  };
}

export interface AgShop {
  id: string;
  name: string;
  type: "seed" | "fertilizer" | "pesticide" | "nursery" | "all";
  address: string;
  phone: string;
  rating: number;
  distance: string;
  routeMapSimulation: {
    lat: number;
    lng: number;
    points: [number, number][]; // Coordinates for mock route
  };
}
