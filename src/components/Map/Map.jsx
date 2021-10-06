import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet'
import marker from '../../assets/icon-location.svg'
import L from 'leaflet'

import './Map.scss'

const Map = ({ dataIp }) => {
    let { coords } = dataIp
    const myIcon = new L.Icon({
        iconUrl: marker,
        iconRetinaUrl: marker,
        iconSize: [40, 50],
    })
    console.log(coords)

    return (
        <MapContainer center={[coords.lat, coords.lng]} zoom={13} scrollWheelZoom={true}>
            <TileLayer
                attribution='&copy; <a href="http://osm.org/copyright">OpenStreetMap</a> contributors'
                url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            />
            <Marker position={[coords.lat, coords.lng]} icon={myIcon}>
                <Popup>
                    {dataIp.ip}
                </Popup>
            </Marker>
        </MapContainer>
    )
}

export default Map
