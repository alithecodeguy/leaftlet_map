// libraries
import { useEffect, useRef } from 'react';
import { Marker, Popup, useMapEvents } from 'react-leaflet';
import { useAtomValue } from 'jotai';

// types
import type { FC } from 'react';
import type { LatLngExpression } from 'leaflet';

// configs
import apiRoutes from '@/app/configs/apiRoutes';

// atoms
import { foundedLocationAtom } from '@/app/atoms';

const DraggableMarker: FC<{
  position: LatLngExpression;
  setPosition: (p: LatLngExpression) => void;
}> = ({ position, setPosition }) => {
  // atoms
  const foundedLocation = useAtomValue(foundedLocationAtom);

  // refs
  const markerRef = useRef<any>(null);

  useEffect(() => {
    if (foundedLocation) {
      setPosition(foundedLocation);
      map.flyTo(foundedLocation, map.getZoom());
    }
  }, [foundedLocation]);

  const map = useMapEvents({
    click(e) {
      setPosition(e.latlng);
    },
    locationfound(e) {
      // const center = map.getCenter();
      // map.flyTo(e.latlng, map.getZoom());
    },
    moveend(e) {
      const { lat, lng } = e.target.getCenter();
      fetch(
        `${apiRoutes.getAddressEndpoint}?` +
          new URLSearchParams({
            lat,
            lng,
          }),
      )
        .then((res) => res.json())
        .then((data) => console.log(data));
    },
    dragend() {
      const marker = markerRef.current;
      if (marker != null) {
        setPosition(marker.getLatLng());
      }
    },
  });

  return (
    <Marker draggable={true} position={position} ref={markerRef}>
      <Popup minWidth={90}>مکان تستی</Popup>
    </Marker>
  );
};

export default DraggableMarker;
