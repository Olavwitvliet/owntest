export interface Bundle {
  id: string;
  name: string;
  type: 'Basic' | 'Premium';
  dataAmount: number; // in GB
  duration: number; // in days
  zones: Zone[];
  price: number;
}

export interface Zone {
  id: string;
  name: 'EU' | 'ASIA' | 'MENA';
  countries: string[];
}

export interface User {
  id: string;
  email: string;
  name: string;
  type: 'b2c' | 'b2b';
  activeBundle?: Bundle;
  dataUsage?: number;
}

export interface Company {
  id: string;
  name: string;
  logo?: string;
  primaryColor?: string;
  secondaryColor?: string;
}