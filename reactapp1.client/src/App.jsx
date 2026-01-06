import { useEffect, useState } from "react";

function App() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        fetch("http://localhost:5092/WeatherForecast")
            .then(res => res.json())
            .then(data => setWeather(data))
            .catch(err => console.error(err));
    }, []);

    return (
        <div>
            <h1>Weather Forecast</h1>
            {weather.map((w, i) => (
                <p key={i}>
                    {w.date} - {w.temperatureC}°C - {w.summary}
                </p>
            ))}
        </div>
    );
}

export default App;
