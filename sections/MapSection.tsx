import React, { useEffect, useState } from "react";
import { ColorScheme, Map, MapType, Marker } from "mapkit-react";
import { usePreferredTheme } from "@/hooks/preferred-theme";
import { LocationInformation } from "@/@types/location";
import { SewingPinFilledIcon } from "@radix-ui/react-icons";
import mapboxgl from 'mapbox-gl';
import 'mapbox-gl/dist/mapbox-gl.css';


mapboxgl.accessToken=process.env.NEXT_PUBLIC_MAPBOX_TOKEN || '';

const MapSection: React.VFC = () => {
  console.log("Ftoekn --->>> ", mapboxgl.accessToken)

  const [location, setLocation] = React.useState<LocationInformation>({
    description: "San Francisco Bay Area, California",
    latitude: 37.77286991906767,
    longitude: -122.42730340601106,
    date: 1699657336433
  });



  useEffect(() => {

    console.log("Ftoekn in use effect --->>> ", mapboxgl.accessToken)

    const map = new mapboxgl.Map({
      container: 'map', // container ID
      style: 'mapbox://styles/mapbox/streets-v11', // style URL
      center: [location.longitude, location.latitude], // starting position [lng, lat]
      zoom: 10, // starting zoom
      pitch: 45, // Tilt the map for a 3D perspective
      bearing: -17.6 // Optional: Adjust the bearing for map rotation
    });
  
    // Add navigation control (optional)
    // map.addControl(new mapboxgl.NavigationControl(), 'top-right');

    return () => map.remove(); // Clean up the map instance on unmount
  }, [location]);



  return (
    <div className="flex flex-col gap-2" style={{ height: '100%' }}>
      <div
        className="relative flex items-center justify-center w-full overflow-hidden border border-solid rounded-lg h-64 border-neutral-300 dark:border-neutral-700"
        style={{ perspective: "2000px", transformStyle: "preserve-3d" }}>
        <div className="absolute inset-0 z-30 opacity-30 dark:opacity-50 bg-gradient-to-tr from-transparent to-neutral-200 dark:to-neutral-800" />
        <div id="map" className="mapContainer " style={{ height: '1000px', width: '100%' }}>
            {/* Mapbox map will attach to this div */}
        </div>
        <div className="absolute inset-0 z-10 opacity-40 bg-neutral-300 dark:bg-neutral-800" />
      </div>
      <div className="min-h-[1rem]">
        {location && <div className="flex items-center justify-between">
          <SewingPinFilledIcon className="dark:text-neutral-500 text-neutral-600" />
          <div className="flex items-center gap-4 flex-end">
            <p className="text-xs dark:text-neutral-500 text-neutral-600">in {location?.description?.toLowerCase()}</p>
            <div className="relative flex items-center justify-center w-1 h-1">
              <div className="absolute inset-0 w-full h-full bg-green-500 rounded-full" />
              <div className="absolute w-4 h-4 bg-green-500 rounded-full animate-ping" style={{ transform: "scale(0)" }} />
            </div>
          </div>
        </div>}
      </div>
    </div>
  );
};

export default MapSection;
