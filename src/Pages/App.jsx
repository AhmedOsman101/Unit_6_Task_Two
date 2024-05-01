import { Route, Routes } from "react-router-dom";
import Error404 from "../components/404.jsx";
import Home from "./Home.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/about" Component={Home} />
				<Route path="/contact" Component={Home} />
				<Route path="/*" Component={Error404} />
			</Routes>
		</>
	);
}

export default App;
