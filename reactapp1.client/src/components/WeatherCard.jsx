function WeatherCard({ date, temp, summary }) {
    return (
        <div className="bg-white rounded-xl shadow-md p-5 w-full max-w-sm
                    hover:shadow-lg transition-shadow duration-300">

            <p className="text-sm text-gray-500 mb-1">
                {date}
            </p>

            <p className="text-4xl font-extrabold text-blue-600">
                {temp}°C
            </p>

            <p className="mt-2 text-lg font-medium text-gray-700">
                {summary}
            </p>
        </div>
    );
}

export default WeatherCard;
