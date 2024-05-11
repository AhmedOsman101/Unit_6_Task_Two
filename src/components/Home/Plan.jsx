/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Plan = ({ plan, activePlan, setActivePlan }) => {
	const handleClick = (id) => {
		setActivePlan(id);
	};

	return (
		<>
			<div
				className={
					plan.id == activePlan
						? "activePlan BasePlan"
						: "plan BasePlan"
				}
				onClick={() => handleClick(plan.id)}>
				<span
					className={
						plan.id == activePlan
							? "absolute top-0 px-6 pt-1 pb-2 rounded-b-lg font-semibold dark:bg-blue-300 dark:text-gray-900"
							: "absolute top-0 px-6 pt-1 pb-2 rounded-b-lg font-semibold dark:text-white border rounded rounded-t-none dark:border-blue-300"
					}>
					{plan.title}
				</span>
				<p className="flex items-center justify-center my-6 space-x-2 font-bold">
					<span className="text-lg line-through dark:text-gray-300">
						&nbsp;${plan.basePrice}&nbsp;
					</span>
					<span className="pb-2 text-4xl">${plan.discountPrice}</span>
					<span className="text-lg">/mo</span>
				</p>
				<ul className="flex-1 space-y-2">
					{plan.features &&
						plan.features.map((feature, index) => {
							return (
								<li
									className="flex items-center space-x-2"
									key={index}>
									<svg
										xmlns="http://www.w3.org/2000/svg"
										fill="none"
										viewBox="0 0 24 24"
										stroke="currentColor"
										className="w-6 h-6 dark:text-blue-300">
										<path
											strokeLinecap="round"
											strokeLinejoin="round"
											strokeWidth="2"
											d="M9 12l2 2 4-4M7.835 4.697a3.42 3.42 0 001.946-.806 3.42 3.42 0 014.438 0 3.42 3.42 0 001.946.806 3.42 3.42 0 013.138 3.138 3.42 3.42 0 00.806 1.946 3.42 3.42 0 010 4.438 3.42 3.42 0 00-.806 1.946 3.42 3.42 0 01-3.138 3.138 3.42 3.42 0 00-1.946.806 3.42 3.42 0 01-4.438 0 3.42 3.42 0 00-1.946-.806 3.42 3.42 0 01-3.138-3.138 3.42 3.42 0 00-.806-1.946 3.42 3.42 0 010-4.438 3.42 3.42 0 00.806-1.946 3.42 3.42 0 013.138-3.138z"></path>
									</svg>
									<span className="PlanFeature">
										{feature}
									</span>
								</li>
							);
						})}
				</ul>
				<Link
					to="contact"
					className={
						plan.id == activePlan ? "activePlanBtn" : "planBtn"
					}>
					Subscribe
				</Link>
			</div>
		</>
	);
};

export default Plan;
