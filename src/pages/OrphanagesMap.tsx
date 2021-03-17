import React from 'react'; import { Link } from 'react-router-dom'; import { FiPlus } from 'react-icons/fi';
import { MapContainer, TileLayer } from 'react-leaflet';

import 'leaflet/dist/leaflet.css';

import '../styles/pages/orphanages-map.css';

function OrphanagesMap() {
  return (
    <div id="page-map">
      <aside>
        <header>
          <img src="#" alt="market logo should be here" />

          <h2>Escolha um ofranato no mapa</h2>
          <p>Muitas crianças estao esperando a sua visita :)</p>
        </header>
        <footer>
          <strong>Rio do sul</strong>
          <span>Santa Catarina</span>
        </footer>
      </aside>
      <MapContainer
        center={[-27.2092052, -49.6401092]}
        zoom={15}
        style={{ width: '100%', height: '100%' }}
      >
        <TileLayer url={`https://api.mapbox.com/styles/v1/mapbox/dark-v10/tiles/256/{z}/{x}/{y}@2x?access_token=${process.env.REACT_APP_MAPBOX_TOKEN}`} /> 
      </MapContainer>
      <Link to="" className="create-orphanage">
        <FiPlus />
      </Link>
    </div>
  );
}

export default OrphanagesMap;
