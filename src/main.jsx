import React from "react";
import ReactDOM from "react-dom/client";
import App from "./Pages/App.jsx";
import "./css/index.css";
import "aos/dist/aos.css";
import { BrowserRouter } from "react-router-dom";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter basename="Unit_6_Task_Two">
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
);
