export async function getWeather() {
    const response = await fetch("http://localhost:5092/WeatherForecast");
    return response.json();
}
