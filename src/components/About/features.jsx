/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import axios from "axios";
import { useEffect, useState } from "react";
import Feature from "./Feature";

const AboutFeatures = () => {
	const [aboutFeatures, setAboutFeatures] = useState([]);
	const fetchData = async () => {
		const data = (await axios.get("http://localhost:3000/Features")).data;
		return data;
	};
	// lg:flex-row-reverse ? lg:flex-row
	useEffect(() => {
		fetchData().then((data) => {
			setAboutFeatures(data);
		});
	}, []);
	return (
		<>
			<section className="p-4 lg:p-8 dark:bg-gray-900 dark:text-gray-100">
				<div className="container mx-auto space-y-12">
					{aboutFeatures &&
						aboutFeatures.map((feature, index) => {
							return <Feature key={index} feature={feature} />;
						})}
				</div>
			</section>
		</>
	);
};

export default AboutFeatures;
