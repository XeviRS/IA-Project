'use client'

import { MapContainer, TileLayer, Marker, Popup, Polyline } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

// Fix for default marker icon
const defaultIcon = L.icon({
  iconUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon.png',
  iconRetinaUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-icon-2x.png',
  shadowUrl: 'https://unpkg.com/leaflet@1.9.4/dist/images/marker-shadow.png',
  iconSize: [25, 41],
  iconAnchor: [12, 41],
  popupAnchor: [1, -34],
  shadowSize: [41, 41],
})

L.Marker.prototype.options.icon = defaultIcon

interface MapSectionProps {
  center?: [number, number]
  zoom?: number
}

// Route coordinates for Camp Nou - Tibidabo - Vallvidrera - Camp Nou
const routeCoords: [number, number][] = [
  [41.3809, 2.1228], // Camp Nou
  [41.3850, 2.1200],
  [41.3900, 2.1180],
  [41.3950, 2.1170],
  [41.4000, 2.1200],
  [41.4050, 2.1230],
  [41.4100, 2.1250],
  [41.4150, 2.1220],
  [41.4180, 2.1190], // Tibidabo area
  [41.4200, 2.1150],
  [41.4180, 2.1100],
  [41.4150, 2.1050],
  [41.4120, 2.1000],
  [41.4080, 2.0950],
  [41.4040, 2.0920], // Vallvidrera area
  [41.4000, 2.0950],
  [41.3960, 2.0980],
  [41.3920, 2.1020],
  [41.3880, 2.1060],
  [41.3850, 2.1100],
  [41.3830, 2.1150],
  [41.3809, 2.1228], // Back to Camp Nou
]

export default function MapSection({ center = [41.3950, 2.1100], zoom = 14 }: MapSectionProps) {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={{ height: '100%', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline
        positions={routeCoords}
        pathOptions={{
          color: '#2196F3',
          weight: 4,
          opacity: 0.8,
        }}
      />
      <Marker position={[41.3809, 2.1228]}>
        <Popup>
          <strong>Camp Nou</strong><br />Inici / Final de ruta
        </Popup>
      </Marker>
      <Marker position={[41.4180, 2.1190]}>
        <Popup>
          <strong>Tibidabo</strong><br />Punt intermedi
        </Popup>
      </Marker>
      <Marker position={[41.4040, 2.0920]}>
        <Popup>
          <strong>Vallvidrera</strong><br />Punt intermedi
        </Popup>
      </Marker>
    </MapContainer>
  )
}
