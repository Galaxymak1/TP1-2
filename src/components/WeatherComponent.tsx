import { useEffect, useState } from 'react';
import { Container } from 'react-bootstrap';

interface WeatherProps {
    apiKey: string;
    city: string;
}

interface WeatherData {
    main: {
        temp: number;
        humidity: number;
        temp_min: number;
        temp_max: number;
    };
    weather: [
        {
            description: string;
            icon: string;
        }
    ];
    wind: {
        speed: number;
        deg: number;
    };
    rain?: {
        '1h': number;
    };
    clouds: {
        all: number;
    };
    name: string;
}

const Weather: React.FC<WeatherProps> = ({ apiKey, city }) => {
    const [weatherData, setWeatherData] = useState<WeatherData | null>(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState<string | null>(null);

    useEffect(() => {

        const fetchWeatherData = async () => {
            try {
                const response = await fetch(
                    `http://api.openweathermap.org/data/2.5/weather?q=${city}&appid=${apiKey}&units=metric`
                    
                );

                if (!response.ok) {
                    throw new Error("Failed to fetch weather data");
                }

                const data = await response.json();
                setWeatherData(data);
                setLoading(false);
                setError("");
            } catch (err) {
                setError((err as Error).message);
                setLoading(false);
            }
        };
        if(city){
            fetchWeatherData();
        }
        
    }, [apiKey, city]);

    if (loading) return <p>Loading weather data...</p>;
    if (error) return <p>Error: {error}</p>;

    return (
        <Container className='border border-black p-5 rounded'>
            <h1 className='pb-3 '>Meteo pour <span className='fw-bold'>{weatherData?.name}</span></h1>
            {weatherData ? (
                <>
                    <p>Temperature :  {weatherData.main.temp}°C {weatherData.main.temp < 10 ? "🧊" : 
                    (weatherData.main.temp > 10 && weatherData.main.temp < 25 ? '😐' : '☀️')}
                        </p>
                    
                    <p>Humidité: {weatherData.main.humidity} %</p>
                    <p>Meteo: {weatherData.weather[0].description} {weatherData.clouds.all > 50 ? "☁️": "☀️"}</p>  
                    <p>Vitesse du vent: {weatherData.wind.speed} m/s</p>
                    {weatherData.rain && <p>Pluie (la dernière heure): {weatherData.rain['1h']} mm</p>}

                </>
            ) : (
                <p>No weather data available</p>
            )}
        </Container>
    );
};

export default Weather;
