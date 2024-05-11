/* eslint-disable no-unused-vars */
import { useEffect, useState } from "react";
import Plan from "./Plan";
import Contact from "../../Pages/Contact";
import { fetchData } from "../../lib/helpers";

const Plans = () => {
	const [plans, setPlans] = useState([]);
	const [activePlan, setActivePlan] = useState(2);
	const [isActive, setIsActive] = useState(true);

	const handleClick = () => {
		setIsActive((prev) => !prev);
	};

	useEffect(() => {
		setPlans(fetchData("Plans"));
	}, []);

	return (
		<>
			<section className="py-6 dark:bg-gray-800 dark:text-gray-50 w-full">
				<div className="mx-auto p-4 sm:p-10">
					<div className="mb-12 space-y-4 text-center PlansTitle">
						<h1 className="text-4xl font-semibold leading-tight dark:text-blue-300">
							Pricing and Plans
						</h1>
						<p className="font-bold px-4 sm:px-8 lg:px-24">
							Get the most secure service at the best price
						</p>
						<div id="plans">
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
						<div className="PlansHolder grid grid-cols-1 place-items-center gap-8 auto-rows-fr lg:max-w-full lg:gap-3 xl:gap-6 lg:grid-cols-3">
							{plans &&
								plans.map((plan, index) => {
									return (
										<Plan
											plan={plan}
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
