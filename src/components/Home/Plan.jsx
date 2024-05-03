/* eslint-disable react/prop-types */

import { Link } from "react-router-dom";

const Plan = ({ product, activePlan, setActivePlan }) => {
	const handleClick = (id) => {
		setActivePlan(id);
	};

	return (
		<>
			<div
				className={
					product.id == activePlan
						? "activePlan bg-gray-900"
						: "plan bg-gray-900"
				}
				onClick={() => handleClick(product.id)}>
				<span className="absolute top-0 px-6 pt-1 pb-2 font-medium rounded-b-lg dark:bg-blue-300 dark:text-gray-900">
					{product.title}
				</span>
				<p className="flex items-center justify-center my-6 space-x-2 font-bold">
					<span className="text-lg line-through dark:text-gray-300">
						&nbsp;${product.basePrice}&nbsp;
					</span>
					<span className="pb-2 text-4xl">
						${product.discountPrice}
					</span>
					<span className="text-lg">/mo</span>
				</p>
				<ul className="flex-1 space-y-2">
					{product.features &&
						product.features.map((feature, index) => {
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
									<span>{feature}</span>
								</li>
							);
						})}
				</ul>
				<Link
					to="contact"
					className={
						product.id == activePlan ? "activePlanBtn" : "planBtn"
					}>
					Subscribe
				</Link>
			</div>
		</>
	);
};

export default Plan;
