import React from "react";
import { MapContainer, TileLayer, Marker, Popup } from "react-leaflet";
import L from "leaflet";
import icon from "leaflet/dist/images/marker-icon.png";
import iconShadow from "leaflet/dist/images/marker-shadow.png";

let DefaultIcon = L.icon({
  iconUrl: icon,
  shadowUrl: iconShadow,
  iconSize: [25, 41], // size of the icon
  iconAnchor: [12, 41], // point of the icon which will correspond to marker's location
  popupAnchor: [1, -34], // point from which the popup should open relative to the iconAnchor
  shadowSize: [41, 41], // size of the shadow
});
L.Marker.prototype.options.icon = DefaultIcon;

const Map = () => {
  const position = [38.9072, -77.0369]; // Coordinates for Washington, DC

  return (
    <section className="bg-white p-1 mt-7 rounded-[24px] w-full md:max-w-[1195px]">
      <MapContainer
        center={position}
        zoom={13}
        attributionControl={false}
        zoomControl={false}
        className="max-w-full w-full h-[360px] rounded-[24px]"
      >
        <TileLayer url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png" />
        <Marker position={position}>
          <Popup className="custom-popup">
            <div className="popup-content">
              <div className="popup-title">Map Street</div>
              <div className="popup-address">John Bucarest St. 199</div>
            </div>
          </Popup>
        </Marker>
      </MapContainer>
    </section>
  );
};

export default Map;
