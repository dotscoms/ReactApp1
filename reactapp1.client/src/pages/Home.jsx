import { useEffect, useState } from "react";
import WeatherList from "../components/WeatherList";
import { getWeather } from "../services/weatherService";

function Home() {
    const [weather, setWeather] = useState([]);

    useEffect(() => {
        getWeather().then(data => setWeather(data));
    }, []);

    return (
        <main className="flex justify-center w-full min-h-screen ">
            <WeatherList weather={weather} />
        </main>
    );
}

export default Home;
