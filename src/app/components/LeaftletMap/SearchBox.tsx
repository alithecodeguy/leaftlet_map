'use client';

// libraries
import { BsSearch } from 'react-icons/bs';
import { useSetAtom } from 'jotai';
import { useState, useRef } from 'react';

// types
import type { SearchServiceResponseType } from '@/app/types/servicesTypes';
import type { FC } from 'react';

// configs
import apiRoutes from '@/app/configs/apiRoutes';

// atoms
import { foundedLocationAtom } from '@/app/atoms';

const SearchBox: FC = () => {
  //refs
  const inputRef = useRef<HTMLInputElement | null>(null);

  // local states
  const [places, setPlaces] = useState<SearchServiceResponseType | null>(null);

  // atoms
  const setFoundedLocation = useSetAtom(foundedLocationAtom);

  // services
  const searchPlace = async (address: string) => {
    if (!address) {
      setPlaces(null);
    } else {
      fetch(
        `${apiRoutes.searchAddressEndpoint}?` +
          new URLSearchParams({
            address,
          }),
      )
        .then((res) => res.json())
        .then((data) => setPlaces(data));
    }
  };

  return (
    <div className="absolute left-1/2 top-4 z-[1000] h-[48px] w-[90%] -translate-x-1/2 transform">
      <section className="relative h-full w-full rounded-[4px]  bg-white px-[40px] py-[8px] shadow-md">
        <input
          ref={inputRef}
          dir="rtl"
          className="h-full w-full p-1 outline-none"
          placeholder="جست‌و‌جو"
          onChange={(e) => searchPlace(e.target.value)}
        />
        <BsSearch className="absolute right-3 top-4 text-[18px] text-gray-400" />
        {places ? (
          <button className="absolute left-1/2 top-14 flex w-full -translate-x-1/2 transform flex-col gap-2 divide-y-2 rounded-md bg-white p-2 text-right">
            {places.map((place) => (
              <div
                key={place.id}
                onClick={() => {
                  setFoundedLocation([place.lat, place.lng]);
                  setPlaces(null);
                  if (inputRef?.current?.value) {
                    inputRef.current.value = '';
                  }
                }}
                className="flex w-full flex-col gap-2"
              >
                <span>{place.name}</span>
              </div>
            ))}
          </button>
        ) : null}
      </section>
    </div>
  );
};

export default SearchBox;
