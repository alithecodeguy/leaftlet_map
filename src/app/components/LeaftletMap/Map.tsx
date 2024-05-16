'use client';

// type
import type { FC } from 'react';
import type { LatLngExpression } from 'leaflet';
import type { MapContainerProps } from 'react-leaflet';

// libraries
import { useEffect, useState } from 'react';
import Leaflet from 'leaflet';
import { MapContainer, TileLayer, ZoomControl } from 'react-leaflet';

// styles
import 'leaflet/dist/leaflet.css';

// components
import DraggableMarker from './DraggableMarker';

const Map: FC<MapContainerProps> = (props) => {
  const [position, setPosition] = useState<LatLngExpression>([35.715298, 51.404343]);
  const [mapAddress, setMapAddress] = useState<string>(
    'https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png',
  );

  useEffect(() => {
    (async function init() {
      // delete Leaflet.Icon.Default.prototype._getIconUrl;
      Leaflet.Icon.Default.mergeOptions({
        iconRetinaUrl: 'leaflet/images/marker-icon-2x.png',
        iconUrl: 'leaflet/images/marker-icon.png',
        shadowUrl: 'leaflet/images/marker-shadow.png',
        // getIconUrl: function (name) {
        //   // Implement your logic here to return the icon URL
        //   // ...
        //   return "your-icon-url";
        // },
      });
    })();
  }, []);

  return (
    <article className="flex h-full w-full flex-col items-center gap-6">
      <MapContainer
        className="h-full w-full"
        zoom={13}
        center={position}
        dragging
        zoomControl={false}
      >
        {/* free tile server : https://tile.openstreetmap.org/{z}/{x}/{y}.png */}
        <TileLayer url={mapAddress} />
        <DraggableMarker position={position} setPosition={setPosition} />
        <ZoomControl position="bottomleft" />
      </MapContainer>
      <div className="flex gap-5">
        <button
          onClick={() => setMapAddress('https://tile.openstreetmap.org/{z}/{x}/{y}.png')}
          className="border p-2 hover:bg-slate-100"
        >
          نقشه 1 (vpn)
        </button>
        <button
          onClick={() =>
            setMapAddress('https://raster.snappmaps.ir/styles/snapp-style/{z}/{x}/{y}{r}.png')
          }
          className="border p-2 hover:bg-slate-100"
        >
          نقشه 2
        </button>
      </div>
    </article>
  );
};

export default Map;
