/* eslint-disable no-unused-vars */
/* eslint-disable react/no-unescaped-entities */
import { useEffect, useState } from "react";
import Feature from "./Feature";
import { fetchData } from "../../lib/helpers";

const AboutFeatures = () => {
	const [aboutFeatures, setAboutFeatures] = useState([]);

	useEffect(() => {
		setAboutFeatures(fetchData("Features"));
	}, []);
	return (
		<>
			<section className="p-4 lg:p-8 dark:bg-gray-900 dark:text-gray-100">
				<div className="mx-auto space-y-12">
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
