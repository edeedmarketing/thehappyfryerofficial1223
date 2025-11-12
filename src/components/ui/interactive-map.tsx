import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

delete (L.Icon.Default.prototype as any)._getIconUrl;
L.Icon.Default.mergeOptions({
  iconRetinaUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon-2x.png',
  iconUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-icon.png',
  shadowUrl: 'https://cdnjs.cloudflare.com/ajax/libs/leaflet/1.7.1/images/marker-shadow.png',
});

interface MapMarker {
  id: number;
  position: [number, number];
  color?: string;
  size?: string;
  popup?: {
    title: string;
    content: string;
  };
}

interface AdvancedMapProps {
  center: [number, number];
  zoom: number;
  markers?: MapMarker[];
  enableClustering?: boolean;
  enableSearch?: boolean;
  enableControls?: boolean;
  style?: React.CSSProperties;
}

export const AdvancedMap: React.FC<AdvancedMapProps> = ({
  center,
  zoom,
  markers = [],
  style,
}) => {
  return (
    <MapContainer
      center={center}
      zoom={zoom}
      style={style || { height: '400px', width: '100%' }}
      scrollWheelZoom={false}
    >
      <TileLayer
        attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      {markers.map((marker) => (
        <Marker key={marker.id} position={marker.position}>
          {marker.popup && (
            <Popup>
              <div>
                <h3 className="font-bold">{marker.popup.title}</h3>
                <p>{marker.popup.content}</p>
              </div>
            </Popup>
          )}
        </Marker>
      ))}
    </MapContainer>
  );
};
