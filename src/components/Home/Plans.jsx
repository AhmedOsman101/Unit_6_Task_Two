/* eslint-disable no-unused-vars */
import axios from "axios";
import { useEffect, useState } from "react";
import Plan from "./Plan";
import Contact from "../../Pages/Contact";

const Plans = () => {
	const [products, setProducts] = useState([]);
	const [activePlan, setActivePlan] = useState(2);
	const [isActive, setIsActive] = useState(true);

	const handleClick = () => {
		setIsActive((prev) => !prev);
	};

	const fetchData = async () => {
		const data = (await axios.get("http://localhost:3000/Products")).data;
		return data;
	};
	useEffect(() => {
		fetchData().then((data) => {
			setProducts(data);
		});
	}, []);

	return (
		<>
			<section className="py-6 dark:bg-gray-800 dark:text-gray-50">
				<div className="container mx-auto p-4 sm:p-10">
					<div className="mb-6 space-y-4 text-center">
						<h1 className="text-4xl font-semibold leading-tight dark:text-blue-300">
							Pricing and Plans
						</h1>
						<p className="font-bold px-4 sm:px-8 lg:px-24">
							Get the most secure service at the best price
						</p>
						<div>
							<button
								className={
									isActive
										? "activeFilter rounded-l-lg"
										: "filter rounded-l-lg"
								}
								onClick={handleClick}>
								Presets
							</button>
							<button
								className={
									isActive
										? "filter rounded-r-lg"
										: "activeFilter rounded-r-lg"
								}
								onClick={handleClick}>
								Custom
							</button>
						</div>
					</div>

					{!isActive && <Contact />}
					{isActive && (
						<div className="grid max-w-md grid-cols-1 gap-6 mx-auto auto-rows-fr lg:max-w-full lg:gap-2 xl:gap-6 lg:grid-cols-3">
							{products &&
								products.map((product, index) => {
									return (
										<Plan
											product={product}
											key={index}
											activePlan={activePlan}
											setActivePlan={setActivePlan}
										/>
									);
								})}
						</div>
					)}
				</div>
			</section>
		</>
	);
};

export default Plans;
