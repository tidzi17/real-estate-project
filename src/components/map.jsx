import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';
import 'leaflet/dist/leaflet.css';
import L from 'leaflet';
import {TfiLocationPin} from 'react-icons/tfi';
import ReactDOMServer from 'react-dom/server';
import '../styles/main.scss';


const Map = () => {

const CustomIcon = () => {
    return (
      <div className="custom-icon">
        <TfiLocationPin />
      </div>
    );
  };
    const customIcon = new L.divIcon({
      html: ReactDOMServer.renderToString(<CustomIcon />),
      iconSize: [0, 0],
      iconAnchor: [56, 52],
      
    });
  
    return (
      <div  className="map">
        <MapContainer
          center={[25.7617, -80.1918]} // Miami coordinates
          zoom={12}
          style={{
            height: '100%',
            width: '100%'
          }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
  
          {/* Marker for Miami */}
          <Marker position={[25.7617, -80.1918]} icon={customIcon}>
            <Popup>Miami, FL</Popup>
          </Marker>
        </MapContainer>
      </div>
    );
  };
  
  export default Map;