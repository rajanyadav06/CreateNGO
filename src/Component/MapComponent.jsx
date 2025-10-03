const MapComponent = () => {
  return (
    <iframe 
        src="https://maps.google.com/maps?q=A-88+Sector+4+noida%C2%A0201301&t=k&z=14&ie=UTF8&iwloc=&output=embed"
        width="100%"
        height="450"
        style={{ border: 0 }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Location Map"
    ></iframe>
  );
}   

export default MapComponent;