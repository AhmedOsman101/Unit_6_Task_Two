import { Route, Routes } from "react-router-dom";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import Main from "../layout/Main.jsx";
import About from "./About.jsx";
import Error404 from "./404.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" Component={Main}>
					<Route index Component={Home} />
					<Route path="about" Component={About} />
					<Route path="contact" Component={Contact} />
					<Route path="*" Component={Error404} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
