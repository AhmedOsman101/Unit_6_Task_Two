import { useEffect, useState } from "react";
import Question from "../Question";
import { fetchData } from "../../lib/helpers";

const FAQs = () => {
	const [questions, setQuestions] = useState([]);
	useEffect(() => {
		setQuestions(fetchData("FAQs"));
	}, []);

	return (
		<>
			<section className="bg-gray-100 dark:bg-gray-900 text-gray-800 dark:text-gray-100">
				<div className="container flex flex-col justify-center px-4 py-8 mx-auto md:p-8">
					<h2 className="text-2xl font-semibold sm:text-4xl">
						Frequently Asked Questions
					</h2>
					<p className="mt-4 mb-8 text-gray-600 dark:text-gray-400">
						These frequently asked questions cover a range of topics
						related to general help and advice on security,
						providing valuable information for individuals and
						businesses looking to enhance their security measures.
					</p>
					<div className="space-y-4">
						{questions &&
							questions.map((question, index) => (
								<Question key={index} data={question} />
							))}
					</div>
				</div>
			</section>
		</>
	);
};

export default FAQs;
