export const SUPPORTED_ZONES = {
  EU: {
    id: 'eu',
    name: 'EU',
    countries: ['France', 'Germany', 'Italy', 'Spain', 'Netherlands'],
  },
  ASIA: {
    id: 'asia',
    name: 'ASIA',
    countries: ['Japan', 'South Korea', 'Singapore', 'Thailand', 'Vietnam'],
  },
  MENA: {
    id: 'mena',
    name: 'MENA',
    countries: ['UAE', 'Saudi Arabia', 'Egypt', 'Qatar', 'Bahrain'],
  },
} as const;

export const BUNDLE_TYPES = {
  BASIC: 'Basic',
  PREMIUM: 'Premium',
} as const;

export const DATA_LIMITS = {
  MIN: 1 * 1024 * 1024 * 1024, // 1GB
  MAX: 20 * 1024 * 1024 * 1024, // 20GB
} as const;

export const DURATION_LIMITS = {
  MIN: 1,
  MAX: 90,
} as const;