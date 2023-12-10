// components/MapSidebar.tsx

import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import L from 'react-leaflet'
import 'leaflet/dist/leaflet.css';

const MapSidebar = () => {
  const position = [51.505, -0.09]; 
  return (
    <div style={{ display: 'flex', height: '100vh' }}>
      {/* Sidebar */}
      <div style={{ width: '25%', backgroundColor: '#f0f0f0', padding: '20px' }}>
        <h2>Sidebar</h2>
        {/* Tambahkan elemen-elemen sidebar di sini */}
      </div>

      {/* Map */}
      <MapContainer center={position} zoom={13} style={{ flex: 1 }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Marker position={position}>
          <Popup>
            A pretty CSS3 popup. <br /> Easily customizable.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default MapSidebar;
