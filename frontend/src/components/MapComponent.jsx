// frontend/src/components/MapComponent.jsx
import { MapContainer, TileLayer, Marker } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';

const MapComponent = ({ stores, onSelectStore }) => {
  const getColor = (status) => {
    switch (status) {
      case 'ACTIVO':
        return 'green';
      case 'VISITADO':
        return 'orange';
      case 'NO_INTERESADO':
        return 'red';
      default:
        return 'gray';
    }
  };

  const createIcon = (color) =>
    L.divIcon({
      className: 'custom-marker',
      html: `<div style="background-color:${color}; width:16px; height:16px; border-radius:50%; border: 2px solid white;"></div>`,
    });

  const validStores = stores.filter(
    (store) =>
      store.latitude !== undefined &&
      store.longitude !== undefined &&
      !isNaN(store.latitude) &&
      !isNaN(store.longitude)
  );

  return (
    <MapContainer
      center={[38.7169, -9.1399]} // por defecto Lisboa
      zoom={6}
      style={{ height: '100vh', width: '100%' }}
    >
      <TileLayer
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        attribution="&copy; OpenStreetMap contributors"
      />
      {validStores.map((store, index) => (
        <Marker
          key={index}
          position={[store.latitude, store.longitude]}
          icon={createIcon(getColor(store.status))}
          eventHandlers={{
            click: () => onSelectStore(store),
          }}
        />
      ))}
    </MapContainer>
  );
};

export default MapComponent;