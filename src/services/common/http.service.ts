import { URLSearchParams } from 'next/dist/compiled/@edge-runtime/primitives/url';

const API_URL = 'http://localhost:8080/api';
const API_PUBLIC_URL = `${API_URL}/public`;

export const httpGet = async <T>(endpoint: string, params?: URLSearchParams): Promise<T> => {
  const res = await fetch(`${API_PUBLIC_URL}${endpoint}${params ? `?${params}` : ''}`);

  if (!res.ok) {
    throw new Error('Failed to retrieve ' + endpoint);
  }

  return res.json();
};
