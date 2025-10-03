import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const MapComponent = () => {
    const position = [28.5315,77.4246]; // Loaction A-88 Sector 4 noida 

    return (
        <div className="w-full flex justify-center items-center">    
            <MapContainer
                center={position}
                zoom={13}
                className="w-full h-[150px] sm:h-[250px] md:h-[250px] lg:h-[400px] rounded-lg shadow-lg"
            >
                <TileLayer
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                    
                />
                <Marker  position={position}>
                    <Popup>A-88 Sector 4 noida 201301</Popup>
                </Marker>
            </MapContainer>
        </div>
    );
};

export default MapComponent;