import WeatherCard from "./WeatherCard";

function WeatherList({ weather }) {
    return (
        <div className="max-w-6xl mx-auto px-4 py-6">

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                {weather.map((w, i) => (
                    <WeatherCard
                        key={i}
                        date={w.date}
                        temp={w.temperatureC}
                        summary={w.summary}
                    />
                ))}
            </div>

        </div>
    );
}

export default WeatherList;
