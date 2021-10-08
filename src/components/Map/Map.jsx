import {
  MapContainer,
  TileLayer,
  Marker,
  Popup,
  ZoomControl,
} from "react-leaflet";
import marker from "../../assets/icon-location.svg";
import L from "leaflet";

import "./Map.scss";
import { memo } from "react";

const Map = ({ dataIp }) => {
  let { coords } = dataIp;
  const myIcon = new L.Icon({
    iconUrl: marker,
    iconRetinaUrl: marker,
    iconSize: [40, 50],
  });

  return (
    <MapContainer
      center={[coords.lat, coords.lng]}
      zoom={13}
      scrollWheelZoom={true}
      zoomControl={false}
    >
      <TileLayer
        attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
        url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
      />
      <Marker position={[coords.lat, coords.lng]} icon={myIcon}>
        <Popup>{dataIp.ip}</Popup>
      </Marker>
      <ZoomControl position="bottomright" />
    </MapContainer>
  );
};

export default memo(Map);
