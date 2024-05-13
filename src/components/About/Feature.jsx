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
				className="FeatureHolder flex items-stretch overflow-hidden rounded-md shadow-sm">
				<div
					className={`FeatureBody flex flex-col justify-center flex-1 md:rounded-none dark:bg-gray-800 sm:w-[90%] sm:rounded-b-md ${
						feature.id % 2 == 0
							? "lg:flex-row"
							: "lg:flex-row-reverse"
					}`}>
					<img
						alt={feature.name}
						src={feature.image}
						className="FeatureImg md:max-w-[45%] sm:max-w-[90%] dark:bg-gray-500 aspect-video object-cover md:rounded-none sm:rounded-t-md sm:rounded-b-none"
					/>
					<div className="flex flex-col p-6 w-full">
						<h3 className="md:text-3xl md:font-bold">
							{feature.name}
						</h3>
						{feature &&
							feature.content.map((item, index) => {
								return (
									<p
										className={
											"dark:text-gray-400 " +
											(index + 1 == feature.content.length
												? "Y sm:my-4 lg:my-6"
												: "T sm:mt-4 lg:mt-6")
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
							className="FeatureBtn">
							view available plans
							<span className="absolute top-0 right-0 px-5 py-1 text-[0.65rem] tracking-wider text-center uppercase whitespace-no-wrap origin-bottom-left transform rotate-45 -translate-y-full translate-x-1/3 dark:bg-cyan-400">
								Hot
							</span>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};

export default Feature;
