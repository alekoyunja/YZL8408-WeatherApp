import { createRoot } from "react-dom/client";
import WeatherApp from "./WeatherApp";
import "bootstrap/dist/css/bootstrap.css";
import "animate.css/animate.css"

const container = document.getElementById("root");
const root = createRoot(container);

root.render(<WeatherApp />);