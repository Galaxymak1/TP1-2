import { Container, Form, Button } from "react-bootstrap";
import Weather from "../components/WeatherComponent"; 
import { useEffect, useState } from "react";

const Meteo = () => {
    const apiKey = "f85e60abf8a3c66b915b7bd0b166d36e";

    const [city, setCity] = useState<string>("London");
    const [submittedCity, setSubmittedCity] = useState<string>("");

 
    useEffect(() => {
        const storedCity = localStorage.getItem("city");
        if (storedCity) {
            setSubmittedCity(storedCity); 
            setCity(storedCity); 
        } else {
            setSubmittedCity(city); 
        }
    }, []);

    const handleSubmit = (event: React.FormEvent<HTMLFormElement>) => {
        event.preventDefault();
        setSubmittedCity(city); 
        localStorage.setItem("city", city); 
    };

    const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        setCity(event.target.value);
    };

    return (
        <Container>

            <Weather apiKey={apiKey} city={submittedCity} />

            <Container className="mt-4">
                <Form
                    className="d-inline-flex align-items-center justify-content-center py-3"
                    onSubmit={handleSubmit}
                >
                    <p className="m-0">Rechercher par nom :</p>
                    <Form.Control
                        type="text"
                        placeholder="Nom"
                        value={city}
                        onChange={handleInputChange}
                        className="mx-3"
                    />
                    <Button type="submit">Rechercher</Button>
                </Form>
            </Container>
        </Container>
    );
};

export default Meteo;
