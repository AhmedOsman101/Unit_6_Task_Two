import { Route, Routes } from "react-router-dom";
import Error404 from "../components/404.jsx";
import Home from "./Home.jsx";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer.jsx";

function App() {
	return (
		<>
			<Navbar />
			<Routes>
				<Route path="/" Component={Home} />
				<Route path="/about" Component={Home} />
				<Route path="/contact" Component={Home} />
				<Route path="/*" Component={Error404} />
			</Routes>
			<Footer />
		</>
	);
}

export default App;
