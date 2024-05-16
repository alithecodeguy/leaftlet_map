// libraries
import { atom } from 'jotai';

// types
import type { LatLngExpression } from 'leaflet';

export const foundedLocationAtom = atom<LatLngExpression | null>(null);
