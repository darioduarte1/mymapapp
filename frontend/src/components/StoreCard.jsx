import './StoreCard.css';

const StoreCard = ({ store }) => {
  if (!store) return null;

  console.log('📦 StoreCard renderizado con:', store);

  const openGoogleMaps = () => {
    window.open(`https://www.google.com/maps/dir/?api=1&destination=${store.latitude},${store.longitude}`, '_blank');
  };

  return (
    <div
      className="store-card"
      style={{
        position: 'absolute',
        top: '100px',
        left: '100px',
        zIndex: 1000,
        backgroundColor: 'white',
        padding: '1rem',
        border: '1px solid #000',
        borderRadius: '8px',
        boxShadow: '0 2px 10px rgba(0,0,0,0.2)',
      }}
    >
      <h3>{store.name}</h3>
      <p><strong>Dirección:</strong> {store.address}</p>
      <p><strong>Coordenadas:</strong> {store.latitude}, {store.longitude}</p>
      <p><strong>Estado:</strong> {store.status}</p>
      <p><strong>Teléfono:</strong> {store.phone}</p>
      <p><strong>Última visita:</strong> {store.last_visit}</p>
      <p><strong>Descripción:</strong> {store.description}</p>
      <p><strong>Sistemas contratados:</strong> {store.systems}</p>
      <button onClick={openGoogleMaps}>Ir con Google Maps</button>
    </div>
  );
};

export default StoreCard;