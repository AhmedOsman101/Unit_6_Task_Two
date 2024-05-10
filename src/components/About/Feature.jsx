/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
/* eslint-disable react/prop-types */
import AOS from "aos";
import "aos/dist/aos.css";
import { useEffect } from "react";
import { Link } from "react-router-dom";

const Feature = ({ feature }) => {
	useEffect(() => {
		AOS.init();
	}, []);
	return (
		<>
			<div
				data-aos-duration="1000"
				data-aos-easing="ease-in-out"
				data-aos={feature.id % 2 == 0 ? "fade-right" : "fade-left"}
				className={
					"flex flex-col overflow-hidden rounded-md shadow-sm items-stretch " +
					(feature.id % 2 == 0
						? "lg:flex-row"
						: "lg:flex-row-reverse")
				}>
				<img
					alt={feature.name}
					src={feature.image}
					className="max-w-[45%] dark:bg-gray-500 aspect-video object-cover"
				/>
				<div className="flex flex-col justify-center flex-1 p-6 dark:bg-gray-800">
					<h3 className="text-3xl font-bold">{feature.name}</h3>
					{feature &&
						feature.content.map((item, index) => {
							return (
								<p
									className={
										"dark:text-gray-400 " +
										(index + 1 == feature.content.length
											? "my-6"
											: "mt-6")
									}
									key={index}>
									<span className="font-bold inline-block mr-2">
										•{" "}
									</span>
									{item}
								</p>
							);
						})}
					<Link
						to="/#plans"
						className="relative px-6 py-3 overflow-hidden font-semibold rounded dark:bg-gray-100 dark:text-gray-900 self-start">
						view available plans
						<span className="absolute top-0 right-0 px-5 py-1 text-[0.65rem] tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-cyan-400">
							Hot
						</span>
					</Link>
				</div>
			</div>
		</>
	);
};

export default Feature;
