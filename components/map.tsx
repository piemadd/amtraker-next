import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const map = () => {

    const style = 'piemadd/ckyugw7ui000y14o2nq8we94g'
    const token = 'pk.eyJ1IjoicGllbWFkZCIsImEiOiJja2ltYzQ5YWMwcnZtMnJxbWttcGQ2MHF4In0.eHizY2ZVCp-mp0ViI5ZIEg'
    
    return (
        <MapContainer
            center={[39.14710270770074, -96.1962890625]}
            zoom={5}
            //maxZoom={14}
            scrollWheelZoom={false}
            tileSize={512}
            style={{ height: "100vh", width: "100vw", 'zIndex': 0, overflow: 'hidden' }}
            zoomControl={false}
            scrollWheelZoom={true}
        >
            <TileLayer
                url={`https://api.mapbox.com/styles/v1/${style}/tiles/{z}/{x}/{y}?access_token=${token}`}
                attribution='Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, Imagery © <a href="https://www.mapbox.com/">Mapbox</a>'
            />
        </MapContainer>
    );
};

export default map;