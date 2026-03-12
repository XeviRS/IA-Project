'use client'

import { MapContainer, TileLayer, Polyline, Marker, Popup } from 'react-leaflet'
import L from 'leaflet'
import 'leaflet/dist/leaflet.css'

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

interface RouteMapProps {
  lat: number
  lng: number
  routeIndex: number
}

const routeData: [number, number][][] = [
  // Route 0: Camp Nou - Tibidabo - Vallvidrera
  [
    [41.3809, 2.1228], [41.3850, 2.1200], [41.3900, 2.1180],
    [41.3950, 2.1170], [41.4000, 2.1200], [41.4050, 2.1230],
    [41.4100, 2.1250], [41.4150, 2.1220], [41.4180, 2.1190],
    [41.4200, 2.1150], [41.4180, 2.1100], [41.4150, 2.1050],
    [41.4120, 2.1000], [41.4080, 2.0950], [41.4040, 2.0920],
    [41.4000, 2.0950], [41.3960, 2.0980], [41.3920, 2.1020],
    [41.3880, 2.1060], [41.3850, 2.1100], [41.3830, 2.1150],
    [41.3809, 2.1228],
  ],
  // Route 1: Carretera de les Aigües
  [
    [41.4100, 2.1300], [41.4110, 2.1250], [41.4120, 2.1200],
    [41.4130, 2.1150], [41.4140, 2.1100], [41.4145, 2.1050],
    [41.4140, 2.1000], [41.4130, 2.0950], [41.4120, 2.0900],
    [41.4110, 2.0850], [41.4100, 2.0800],
  ],
  // Route 2: Passeig Marítim - Port Olímpic
  [
    [41.3770, 2.1850], [41.3780, 2.1880], [41.3790, 2.1910],
    [41.3810, 2.1940], [41.3830, 2.1960], [41.3850, 2.1975],
    [41.3870, 2.1990], [41.3890, 2.2010], [41.3910, 2.2030],
    [41.3930, 2.2050], [41.3950, 2.2070], [41.3960, 2.2090],
  ],
  // Route 3: Montjuïc - Castell
  [
    [41.3633, 2.1586], [41.3640, 2.1570], [41.3650, 2.1555],
    [41.3660, 2.1540], [41.3670, 2.1530], [41.3680, 2.1520],
    [41.3690, 2.1510], [41.3700, 2.1530], [41.3710, 2.1550],
    [41.3720, 2.1570], [41.3730, 2.1590], [41.3730, 2.1610],
    [41.3720, 2.1620], [41.3710, 2.1610], [41.3700, 2.1600],
    [41.3690, 2.1590], [41.3680, 2.1580], [41.3660, 2.1575],
    [41.3633, 2.1586],
  ],
]

const routeColors = ['#2196F3', '#4CAF50', '#00BCD4', '#FF9800']

export default function RouteMap({ lat, lng, routeIndex }: RouteMapProps) {
  const coords = routeData[routeIndex] || routeData[0]
  const color = routeColors[routeIndex] || routeColors[0]

  return (
    <MapContainer
      center={[lat, lng]}
      zoom={14}
      style={{ height: '100%', width: '100%', borderRadius: '12px' }}
      scrollWheelZoom={false}
      zoomControl={false}
      dragging={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a>'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Polyline
        positions={coords}
        pathOptions={{
          color: color,
          weight: 4,
          opacity: 0.9,
        }}
      />
      <Marker position={coords[0]}>
        <Popup>Inici de ruta</Popup>
      </Marker>
      <Marker position={coords[coords.length - 1]}>
        <Popup>Final de ruta</Popup>
      </Marker>
    </MapContainer>
  )
}
