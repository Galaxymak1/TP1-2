import { Container, Form, Button } from "react-bootstrap";
import { useState, useEffect } from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import 'leaflet/dist/leaflet.css'; 

// Component to change map view dynamically
const ChangeView = ({ center }: { center: [number, number] }) => {
    const map = useMap();
    map.setView(center, map.getZoom()); 
    return null;
};

const Map = () => {
    const [city, setCity] = useState<string>("London");
    const [position, setPosition] = useState<[number, number]>([51.505, -0.09]);
    const apiKey = "f85e60abf8a3c66b915b7bd0b166d36e"; 

    const fetchCityCoordinates = async (city: string) => {
        try {
            const response = await fetch(`http://api.openweathermap.org/geo/1.0/direct?q=${city}&limit=1&appid=${apiKey}`);
            const data = await response.json();
            if (data.length > 0) {
                const { lat, lon } = data[0];
                setPosition([lat, lon]); 
            } else {
                alert("City not found");
            }
        } catch (error) {
            console.error("Error fetching city coordinates:", error);
        }
    };

    useEffect(() => {
        const storedCity = localStorage.getItem("city");
        if (storedCity) {
            setCity(storedCity);
            fetchCityCoordinates(storedCity); 
        }
    }, []);

    const handleCityChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        const newCity = event.target.value;
        setCity(newCity);
        localStorage.setItem("city", newCity);
    };

    const handleSubmit = async (event: React.FormEvent) => {
        event.preventDefault();
        fetchCityCoordinates(city); 
    };

    return (
        <Container className="d-flex flex-column align-items-center pt-4">
            <Form onSubmit={handleSubmit} className="d-flex my-3">
                <Form.Control
                    type="text"
                    placeholder="Enter city name"
                    value={city}
                    onChange={handleCityChange}
                    className="me-2"
                />
                <Button variant="outline-dark" type="submit">Search</Button>
            </Form>
            
            <MapContainer
                center={position} 
                zoom={13}
                scrollWheelZoom={true}
                style={{ height: "500px", width: "500px" }} 
            >
                <ChangeView center={position} /> 
                <TileLayer
                    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
                    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
                />
                <Marker position={position}>
                    <Popup>
                        {city} <br /> Coordinates: {position[0]}, {position[1]}
                    </Popup>
                </Marker>
            </MapContainer>
        </Container>
    );
};

export default Map;
