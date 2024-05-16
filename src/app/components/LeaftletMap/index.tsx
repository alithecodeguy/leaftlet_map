// components
import Map from './Map';
import SearchBox from './SearchBox';

// types
import type { FC } from 'react';
import type { MapSizeInterface } from '@/app/types/commonTypes';

const LeaftletMap: FC<{ mapSize: MapSizeInterface }> = ({ mapSize }) => {
  const { width, height } = mapSize;

  return (
    <div style={{ aspectRatio: width / height, maxWidth: 500 }} className="relative">
      <Map />
      <SearchBox />
    </div>
  );
};

export default LeaftletMap;
