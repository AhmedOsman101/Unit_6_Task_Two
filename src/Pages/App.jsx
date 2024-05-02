import { Route, Routes } from "react-router-dom";
import Error404 from "../components/404.jsx";
import Home from "./Home.jsx";
import Contact from "./Contact.jsx";
import FAQs from "./FAQs.jsx";
import Main from "../layout/Main.jsx";
import { About } from "./About.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" Component={Main}>
					<Route index Component={Home} />
					<Route path="/about" Component={About} />
					<Route path="/FAQs" Component={FAQs} />
					<Route path="/contact" Component={Contact} />
					<Route path="/*" Component={Error404} />
				</Route>
			</Routes>
		</>
	);
}

export default App;
