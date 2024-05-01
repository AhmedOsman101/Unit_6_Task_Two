import { Route, Routes } from "react-router-dom";
import Error404 from "../components/404.jsx";

function App() {
	return (
		<>
			<Routes>
				<Route path="/" element={<div>App</div>} />
				<Route path="/*" Component={Error404} />
			</Routes>
		</>
	);
}

export default App;
