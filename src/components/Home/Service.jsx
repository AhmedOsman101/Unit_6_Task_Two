import Aos from "aos";
import { useEffect, useState } from "react";
import { animationDurationCalculator } from "../../lib/helpers";

/* eslint-disable react/prop-types */
const Service = ({ service, length }) => {
	const [fadeDuration] = useState(
		animationDurationCalculator(500, service.id, 50),
	);

	const [windowWidth, setWindowWidth] = useState(window.innerWidth);

	useEffect(() => {
		if (checkViewPortWidth(windowWidth)) {
			Aos.init({ once: true, easing: "ease-in-sine" });
		}
		const handleResize = () => {
			setWindowWidth(window.innerWidth);
		};
		// Add event listener
		window.addEventListener("resize", handleResize);

		// Call handler right away so state gets updated with initial window size
		handleResize();

		// Remove event listener on cleanup
		return () => window.removeEventListener("resize", handleResize);
	}, [windowWidth]); // Empty array ensures that effect is only run on mount and unmount

	const checkViewPortWidth = (windowWidth) => {
		return windowWidth == window.innerWidth && window.innerWidth >= 1023;
	};

	return (
		<>
			<div
				className="flex flex-col items-center p-4"
				data-aos={
					checkViewPortWidth(windowWidth)
						? service.id <= length / 2
							? "fade-right"
							: "fade-left"
						: ""
				}
				data-aos-duration={`${fadeDuration}`}
				data-aos-delay={
					service.id <= length / 2
						? "0"
						: `${animationDurationCalculator(500, length / 2, 50)}`
				}>
				<svg
					height="50"
					width="50"
					xmlns="http://www.w3.org/2000/svg"
					viewBox="0 0 512 512">
					<path
						fill="#74C0FC"
						d="M256 0c4.6 0 9.2 1 13.4 2.9L457.7 82.8c22 9.3 38.4 31 38.3 57.2c-.5 99.2-41.3 280.7-213.6 363.2c-16.7 8-36.1 8-52.8 0C57.3 420.7 16.5 239.2 16 140c-.1-26.2 16.3-47.9 38.3-57.2L242.7 2.9C246.8 1 251.4 0 256 0zm0 66.8V444.8C394 378 431.1 230.1 432 141.4L256 66.8l0 0z"
					/>
				</svg>
				<h3 className="my-3 text-lg font-semibold text-center">
					{service.name}
				</h3>
			</div>
		</>
	);
};

export default Service;
