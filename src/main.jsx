import React from "react";
import ReactDOM from "react-dom/client";
import { BrowserRouter } from "react-router-dom";
import App from "./Pages/App.jsx";
import "./css/index.css";
import "aos/dist/aos.css";

// document.designMode = "on";

ReactDOM.createRoot(document.getElementById("root")).render(
	<BrowserRouter basename="Unit_6_Task_Two">
		<React.StrictMode>
			<App />
		</React.StrictMode>
	</BrowserRouter>,
);
