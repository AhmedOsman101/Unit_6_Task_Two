import { useEffect } from "react";
import AboutFeatures from "../components/About/Features";
import Header from "../components/About/Header";

const About = () => {
	useEffect(() => {
		document.title = "Berimbolo Security | About";
	}, []);

	return (
		<>
			<div id="About">
				<Header />
				<AboutFeatures />
			</div>
		</>
	);
};

export default About;
