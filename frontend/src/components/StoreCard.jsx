import './StoreCard.css';

const StoreCard = ({ store }) => {
  if (!store) return null;

  const openGoogleMaps = () => {
    window.open(
      `https://www.google.com/maps/dir/?api=1&destination=${store.latitude},${store.longitude}`,
      '_blank'
    );
  };

  return (
    <div className="store-card">
      <div className="store-card-header">
        <h3 className="store-name">{store.name}</h3>
      </div>
      <p><strong>Dirección:</strong> {store.address || 'Sin dirección'}</p>
      <p><strong>Coordenadas:</strong> {store.latitude}, {store.longitude}</p>
      <p><strong>Estado:</strong> {store.status}</p>
      <p><strong>Teléfono:</strong> {store.phone || 'No disponible'}</p>
      <p><strong>Última visita:</strong> {store.last_visit || 'Sin registro'}</p>
      <p><strong>Descripción:</strong> {store.description || 'Sin descripción'}</p>
      <p><strong>Sistemas contratados:</strong> {store.systems || 'Ninguno'}</p>
      <button className="maps-button" onClick={openGoogleMaps}>
        Ir con Google Maps
      </button>
    </div>
  );
};

export default StoreCard;