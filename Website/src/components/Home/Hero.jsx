import { useEffect, useState } from "react";
import { fetchData } from "../../lib/helpers";
import Service from "./Service";

const Hero = () => {
	const [services, setServices] = useState([]);

	useEffect(() => {
		setServices(fetchData("Features"));
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
					{services &&
						services.map((service, index) => {
							return (
								<Service
									key={index}
									service={service}
									length={services.length}
								/>
							);
						})}
				</div>
			</section>
		</>
	);
};

export default Hero;
