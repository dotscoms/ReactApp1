import { useEffect, useState } from "react";
import Header from "./components/Header";
import WeatherList from "./components/WeatherList";
import { getWeather } from "./services/weatherService";

function App() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        getWeather().then(data => setWeather(data));
    }, []);

    return (
        <div className="bg-gray-100">
            <Header />

            {/* Centered content */}
            <main className="flex justify-center">
                <WeatherList weather={weather} />
            </main>
        </div>
    );
}

export default App;
