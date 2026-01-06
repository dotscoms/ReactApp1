//function Header() {
//    return (
//        <header className="bg-blue-600 text-white py-6 text-center">
//            <h1 className="text-3xl font-bold">
//                🌦 Weather Forecast
//            </h1>
//            <p className="text-sm opacity-90 mt-1">
//                5-day outlook
//            </p>
//        </header>
//    );
//}

//export default Header;
import { Link } from "react-router-dom";

function Header() {
    return (
        <header className="bg-white shadow-sm">
            <div className="w-full px-4 py-4 flex justify-between items-center">

                <h1 className="text-2xl font-bold text-blue-600">
                    🌤 Weather App
                </h1>

                <nav className="space-x-6">
                    <Link
                        to="/"
                        className="text-gray-600 hover:text-blue-600 font-medium"
                    >
                        Home
                    </Link>

                    <Link
                        to="/about"
                        className="text-gray-600 hover:text-blue-600 font-medium"
                    >
                        About
                    </Link>
                </nav>

            </div>
        </header>
    );
}

export default Header;
