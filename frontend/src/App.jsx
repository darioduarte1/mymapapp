import { useState, useEffect } from 'react';
import axios from 'axios';
import MapComponent from './components/MapComponent.jsx';
import StoreCard from './components/StoreCard.jsx';
import Header from './components/Header.jsx';
import './App.css';

const App = () => {
  const [stores, setStores] = useState([]);
  const [selectedStore, setSelectedStore] = useState(null);
  const [showModal, setShowModal] = useState(false);
  const [newStoreName, setNewStoreName] = useState('');

  useEffect(() => {
    axios
      .get('http://localhost:8000/api/stores/')
      .then((res) => {
        const storesConEstado = res.data.map((store) => ({
          ...store,
          status: store.status || 'ACTIVO',
        }));
        setStores(storesConEstado);
      })
      .catch((err) => console.error('❌ Error cargando tiendas:', err));
  }, []);

  const handleRegisterLocal = () => {
    if (!navigator.geolocation) {
      alert('Geolocalización no soportada.');
      return;
    }

    navigator.geolocation.getCurrentPosition(
      (position) => {
        const { latitude, longitude } = position.coords;

        const nuevaTienda = {
          name: newStoreName,
          latitude,
          longitude,
          status: 'POR VALIDAR',
          address: '',
          phone: '',
          last_visit: null,
          description: '',
          systems: null,
          client_info: '',
        };

        axios
          .post('http://localhost:8000/api/stores/', nuevaTienda)
          .then((res) => {
            setStores([...stores, res.data]);
            setShowModal(false);
            setNewStoreName('');
          })
          .catch((err) => {
            console.error('❌ Error registrando local:', err);
            alert('Error al registrar el local. Revisa los datos enviados.');
          });
      },
      () => {
        alert('No se pudo obtener la ubicación.');
      }
    );
  };

  return (
    <div className="App app-container">
      <Header onOpenModal={() => setShowModal(true)} />

      {showModal && (
        <div className="modal-overlay">
          <div className="modal-content">
            <h3>Registrar nuevo local</h3>
            <input
              type="text"
              value={newStoreName}
              onChange={(e) => setNewStoreName(e.target.value)}
              placeholder="Nombre del local"
              className="modal-input"
            />
            <button className="confirm-button" onClick={handleRegisterLocal}>
              Registrar
            </button>
            <button className="cancel-button" onClick={() => setShowModal(false)}>
              Cancelar
            </button>
          </div>
        </div>
      )}

      {stores.length > 0 ? (
        <>
          <MapComponent
            stores={stores}
            onSelectStore={(store) => {
              console.log('🖱️ Clic en tienda:', store);
              setSelectedStore(store);
            }}
          />

          {selectedStore && <StoreCard store={selectedStore} />}
        </>
      ) : (
        <p>Cargando mapa...</p>
      )}
    </div>
  );
};

export default App;