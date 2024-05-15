import { Outlet } from "react-router-dom";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";

const Main = () => {
	return (
		<>
			<Navbar />
			<main id="Main">
				<Outlet />
			</main>
			<Footer />
		</>
	);
};

export default Main;
