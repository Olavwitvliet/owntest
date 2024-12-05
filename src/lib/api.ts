import { Bundle, User, Company } from '@/types';

const API_DELAY = 1000; // Simulated API delay

// Simulated API calls
export async function fetchBundles(): Promise<Bundle[]> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return [
    {
      id: 'basic-eu',
      name: 'EU Traveler',
      type: 'Basic',
      dataAmount: 5 * 1024 * 1024 * 1024,
      duration: 30,
      zones: [{ id: 'eu', name: 'EU', countries: [] }],
      price: 29.99,
    },
    {
      id: 'premium-global',
      name: 'Global Premium',
      type: 'Premium',
      dataAmount: 20 * 1024 * 1024 * 1024,
      duration: 30,
      zones: [
        { id: 'eu', name: 'EU', countries: [] },
        { id: 'asia', name: 'ASIA', countries: [] },
        { id: 'mena', name: 'MENA', countries: [] },
      ],
      price: 89.99,
    },
  ];
}

export async function activateBundle(bundleId: string): Promise<{ success: boolean; qrCode?: string }> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return {
    success: true,
    qrCode: 'simulated-qr-code-data',
  };
}

export async function fetchUserProfile(): Promise<User | null> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return null; // Implement actual user fetching
}

export async function fetchCompanyProfile(): Promise<Company | null> {
  await new Promise(resolve => setTimeout(resolve, API_DELAY));
  return null; // Implement actual company fetching
}