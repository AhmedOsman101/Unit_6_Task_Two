import { useEffect, useState } from "react";
import { fetchData } from "../../lib/helpers";

const Hero = () => {
	const [features, setFeatures] = useState([]);

	useEffect(() => {
		setFeatures(fetchData("Features"));
	}, []);
	return (
		<>
			<section className="m-4 md:m-8 dark:bg-gray-900 dark:text-gray-100 rounded-md">
				<div className="container mx-auto p-4 my-6 space-y-2 text-center">
					<h2 className="text-5xl font-bold">Berimbolo Security</h2>

					<p className="dark:text-gray-400">
						Built to make you secure
					</p>
				</div>
				<div className="container mx-auto grid justify-center gap-4 sm:grid-cols-2 lg:grid-cols-4">
					{features &&
						features.map((feature, index) => {
							return (
								<div
									className="flex flex-col items-center p-4"
									key={index}>
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
										{feature.name}
									</h3>
								</div>
							);
						})}
				</div>
			</section>
		</>
	);
};

export default Hero;
