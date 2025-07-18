import type { Place } from "./api/Place"
import 'leaflet/dist/leaflet.css'
import type {Map as leafletMap} from 'leaflet';
import { MapContainer , TileLayer , Marker } from "react-leaflet";
import { useEffect, useRef } from "react";


interface MapProps{
    place:Place | null
}
export default function Map({place}:MapProps) {
    const mapRef = useRef<leafletMap | null>(null)
  
        useEffect(()=>{
                if (mapRef.current && place) {
                        mapRef.current.flyTo([place.latitude , place.longitude])
                }
        },[place])


  return <MapContainer
  ref={mapRef}
  center={[40.7 , -74]}
  zoom={12}
  scrollWheelZoom
  className="h-full"
  >
    <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"/>
    {place && <Marker position={[place.longitude,place.latitude]}/>}

  </MapContainer>
}
